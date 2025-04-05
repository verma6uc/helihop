
import { useState, useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NumericFormat } from 'react-number-format';
import { motion } from 'framer-motion';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
import { Slider } from '@/components/ui/slider';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { calculateROI, determineBestTier } from './utils/calculator';
import { membershipTiers, routeOptions } from './data/membershipData';
import { useDebounce } from '@/hooks/useDebounce';
import { Badge } from '@/components/ui/badge';

/**
 * Form data structure for the ROI calculator
 */
interface ROICalculatorFormData {
  frequency: number;
  routeId: string;
  passengerCount: number;
}

/**
 * ROI calculation results structure
 */
interface ROIResults {
  tierName: string;
  annualCost: number;
  payPerTripCost: number;
  savings: number;
  isRecommended: boolean;
}

/**
 * MembershipROICalculator Component
 * 
 * A calculator that helps potential members understand the ROI of different
 * membership tiers based on their travel patterns.
 */
const MembershipROICalculator = () => {
  const [calculationResults, setCalculationResults] = useState<ROIResults[]>([]);
  const [recommendedTier, setRecommendedTier] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string>('chart');

  // Form validation schema
  const schema = yup.object({
    frequency: yup.number().required().min(1).max(52),
    routeId: yup.string().required('Please select a route'),
    passengerCount: yup.number().required().min(1).max(8),
  }).required();

  // Initialize form
  const { control, watch, formState: { errors } } = useForm<ROICalculatorFormData>({
    resolver: yupResolver(schema),
    defaultValues: {
      frequency: 12, // Monthly travel (once per month)
      routeId: routeOptions[0]?.id || '',
      passengerCount: 2,
    }
  });

  // Watch form values
  const formValues = watch();
  const debouncedFormValues = useDebounce(formValues, 300);

  // Calculate ROI when form values change
  useEffect(() => {
    if (!debouncedFormValues.routeId) return;
    
    const selectedRoute = routeOptions.find(route => route.id === debouncedFormValues.routeId);
    if (!selectedRoute) return;
    
    const results = membershipTiers.map(tier => {
      const { annualCost, payPerTripCost, savings } = calculateROI({
        tierDetails: tier,
        frequency: debouncedFormValues.frequency,
        routePrice: selectedRoute.basePrice,
        passengerCount: debouncedFormValues.passengerCount
      });

      return {
        tierName: tier.name,
        annualCost,
        payPerTripCost,
        savings,
        isRecommended: false
      };
    });

    const bestTierName = determineBestTier(results);
    const finalResults = results.map(result => ({
      ...result,
      isRecommended: result.tierName === bestTierName
    }));

    setCalculationResults(finalResults);
    setRecommendedTier(bestTierName);
  }, [debouncedFormValues]);

  // Format currency for display
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(value);
  };

  // Chart data for Victory
  const chartData = calculationResults.map(result => ({
    x: result.tierName,
    y: result.savings > 0 ? result.savings : 0,
    label: formatCurrency(result.savings),
    color: result.isRecommended ? '#0077B6' : '#777777'
  }));

  return (
    <section id="membership-roi-calculator" className="py-16 px-4 md:px-8 lg:px-12 bg-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl font-montserrat font-bold text-center mb-4 text-gray-900">
          Calculate Your Membership Value
        </h2>
        <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg font-lato">
          See how much you can save with a HeliHop membership based on your travel patterns.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Form */}
          <Card className="p-1 shadow-md">
            <CardContent className="pt-6">
              <h3 className="text-xl font-montserrat font-semibold mb-6 text-gray-800">Your Travel Profile</h3>
              
              <div className="space-y-8">
                {/* Frequency slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="frequency-slider" className="block text-gray-700 font-lato font-medium">
                      Frequency of Travel
                    </label>
                    <span className="text-sm text-gray-500 font-lato">
                      <Controller
                        name="frequency"
                        control={control}
                        render={({ field }) => (
                          <span id="frequency-value">
                            {field.value} {field.value === 1 ? 'trip' : 'trips'} per year
                          </span>
                        )}
                      />
                    </span>
                  </div>
                  <Controller
                    name="frequency"
                    control={control}
                    render={({ field }) => (
                      <Slider
                        id="frequency-slider"
                        min={1}
                        max={52}
                        step={1}
                        value={[field.value]}
                        onValueChange={(value) => field.onChange(value[0])}
                        aria-labelledby="frequency-value"
                        className="w-full"
                      />
                    )}
                  />
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>1 (Annual)</span>
                    <span>12 (Monthly)</span>
                    <span>52 (Weekly)</span>
                  </div>
                  {errors.frequency && (
                    <p className="text-red-500 text-sm mt-1">{errors.frequency.message}</p>
                  )}
                </div>

                {/* Route selection */}
                <div className="space-y-3">
                  <label htmlFor="route-select" className="block text-gray-700 font-lato font-medium">
                    Typical Route
                  </label>
                  <Controller
                    name="routeId"
                    control={control}
                    render={({ field }) => (
                      <Select 
                        value={field.value} 
                        onValueChange={field.onChange}
                      >
                        <SelectTrigger id="route-select" className="w-full">
                          <SelectValue placeholder="Select a route" />
                        </SelectTrigger>
                        <SelectContent>
                          {routeOptions.map(route => (
                            <SelectItem key={route.id} value={route.id}>
                              {route.name} - {formatCurrency(route.basePrice)}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.routeId && (
                    <p className="text-red-500 text-sm mt-1">{errors.routeId.message}</p>
                  )}
                </div>

                {/* Passenger count */}
                <div className="space-y-3">
                  <label htmlFor="passenger-count" className="block text-gray-700 font-lato font-medium">
                    Average Passenger Count
                  </label>
                  <Controller
                    name="passengerCount"
                    control={control}
                    render={({ field }) => (
                      <div className="flex items-center space-x-4">
                        <Button
                          type="button"
                          variant="outline"
                          className="h-10 w-10"
                          onClick={() => field.onChange(Math.max(1, field.value - 1))}
                          aria-label="Decrease passenger count"
                        >
                          -
                        </Button>
                        <Input
                          id="passenger-count"
                          type="number"
                          className="h-10 w-20 text-center"
                          min={1}
                          max={8}
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || 1)}
                        />
                        <Button
                          type="button"
                          variant="outline"
                          className="h-10 w-10"
                          onClick={() => field.onChange(Math.min(8, field.value + 1))}
                          aria-label="Increase passenger count"
                        >
                          +
                        </Button>
                      </div>
                    )}
                  />
                  {errors.passengerCount && (
                    <p className="text-red-500 text-sm mt-1">{errors.passengerCount.message}</p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Results Display */}
          <Card className="p-1 shadow-md">
            <CardContent className="pt-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-montserrat font-semibold text-gray-800">Your Potential Savings</h3>
                
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-auto">
                  <TabsList>
                    <TabsTrigger value="chart">Chart</TabsTrigger>
                    <TabsTrigger value="table">Table</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              {calculationResults.length > 0 ? (
                <>
                  <TabsContent value="chart" className="mt-0">
                    <div className="h-[300px] w-full">
                      <VictoryChart
                        theme={VictoryTheme.material}
                        domainPadding={25}
                        animate={{ duration: 500 }}
                        height={300}
                      >
                        <VictoryAxis
                          tickFormat={(t) => t}
                          style={{
                            tickLabels: { fontSize: 12, padding: 5 }
                          }}
                        />
                        <VictoryAxis
                          dependentAxis
                          tickFormat={(t) => `$${Math.round(t / 1000)}k`}
                          style={{
                            tickLabels: { fontSize: 12, padding: 5 }
                          }}
                        />
                        <VictoryBar
                          data={chartData}
                          x="x"
                          y="y"
                          labels={({ datum }) => `${datum.label}`}
                          labelComponent={<VictoryTooltip/>}
                          style={{
                            data: {
                              fill: ({ datum }) => datum.color,
                              width: 35
                            }
                          }}
                        />
                      </VictoryChart>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="table" className="mt-0">
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="bg-gray-100">
                            <th className="px-4 py-3 text-left font-lato font-medium text-gray-700">Membership</th>
                            <th className="px-4 py-3 text-right font-lato font-medium text-gray-700">Annual Cost</th>
                            <th className="px-4 py-3 text-right font-lato font-medium text-gray-700">Per Trip</th>
                            <th className="px-4 py-3 text-right font-lato font-medium text-gray-700">Annual Savings</th>
                          </tr>
                        </thead>
                        <tbody>
                          {calculationResults.map((result, index) => (
                            <tr 
                              key={index}
                              className={`border-b ${result.isRecommended ? 'bg-blue-50' : ''}`}
                            >
                              <td className="px-4 py-3 font-lato">
                                <div className="flex items-center">
                                  {result.tierName}
                                  {result.isRecommended && (
                                    <Badge className="ml-2 bg-[#0077B6]">Recommended</Badge>
                                  )}
                                </div>
                              </td>
                              <td className="px-4 py-3 text-right font-lato">
                                <NumericFormat 
                                  value={result.annualCost} 
                                  displayType="text" 
                                  thousandSeparator={true} 
                                  prefix="$" 
                                  decimalScale={0}
                                />
                              </td>
                              <td className="px-4 py-3 text-right font-lato">
                                <NumericFormat 
                                  value={result.payPerTripCost} 
                                  displayType="text" 
                                  thousandSeparator={true} 
                                  prefix="$" 
                                  decimalScale={0}
                                />
                              </td>
                              <td className={`px-4 py-3 text-right font-lato ${result.savings > 0 ? 'text-green-600 font-semibold' : 'text-gray-500'}`}>
                                <NumericFormat 
                                  value={result.savings} 
                                  displayType="text" 
                                  thousandSeparator={true} 
                                  prefix="$" 
                                  decimalScale={0}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </>
              ) : (
                <div className="flex justify-center items-center h-[300px]">
                  <p className="text-gray-500">Please complete all fields to see your results.</p>
                </div>
              )}

              {recommendedTier && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <h4 className="font-montserrat font-semibold text-gray-900 mb-2">
                    Your Personalized Recommendation
                  </h4>
                  <p className="text-gray-700 font-lato">
                    Based on your travel pattern, the <span className="font-semibold text-[#0077B6]">{recommendedTier}</span> membership would provide you the best value.
                  </p>
                </div>
              )}

              <div className="mt-8 text-center">
                <Button 
                  size="lg" 
                  className="bg-[#0077B6] hover:bg-[#006094] text-white font-lato"
                >
                  Schedule a Consultation
                </Button>
                <p className="mt-2 text-sm text-gray-500 font-lato">
                  Get personalized advice from our membership specialists.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  );
};

export default MembershipROICalculator;
