
import { useState, useMemo } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { NumericFormat } from 'react-number-format';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme, VictoryTooltip } from 'victory';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDebounce } from '@/hooks/useDebounce';
import { calculateMembershipROI } from './utils/calculator';
import { routes, membershipTiers } from './data/membershipData';
import { Badge } from '@/components/ui/badge';

/**
 * Form schema for the ROI calculator
 */
const calculatorSchema = yup.object({
  frequency: yup.number().required('Travel frequency is required').min(1, 'Minimum 1 trip').max(100, 'Maximum 100 trips'),
  route: yup.string().required('Route selection is required'),
  passengers: yup.number().required('Passenger count is required').min(1, 'Minimum 1 passenger').max(10, 'Maximum 10 passengers'),
});

type CalculatorFormData = yup.InferType<typeof calculatorSchema>;

/**
 * MembershipROICalculator - Interactive tool to demonstrate the value and cost-effectiveness
 * of HeliHop membership tiers based on expected usage patterns.
 */
export default function MembershipROICalculator() {
  const [activeTab, setActiveTab] = useState<'graph' | 'table'>('graph');
  const [showRecommendation, setShowRecommendation] = useState(false);

  const { control, handleSubmit, watch, formState: { errors } } = useForm<CalculatorFormData>({
    resolver: yupResolver(calculatorSchema),
    defaultValues: {
      frequency: 10,
      route: routes[0].id,
      passengers: 2,
    },
  });

  // Watch form values for real-time calculation
  const formValues = watch();
  const debouncedFormValues = useDebounce(formValues, 300);

  // Calculate ROI based on form inputs
  const calculationResults = useMemo(() => {
    if (!debouncedFormValues.route) return null;
    
    return calculateMembershipROI({
      frequency: debouncedFormValues.frequency,
      routeId: debouncedFormValues.route,
      passengers: debouncedFormValues.passengers,
    });
  }, [debouncedFormValues]);

  // Determine recommended tier based on calculations
  const recommendedTier = useMemo(() => {
    if (!calculationResults) return null;
    
    // Find the tier with the highest savings
    return Object.entries(calculationResults.savingsPerTier)
      .reduce((best, [tier, savings]) => {
        return savings > best.savings ? { tier, savings } : best;
      }, { tier: '', savings: 0 });
  }, [calculationResults]);

  // Prepare data for Victory chart
  const chartData = useMemo(() => {
    if (!calculationResults) return [];
    
    return Object.entries(calculationResults.savingsPerTier).map(([tier, savings]) => ({
      tier,
      savings,
      color: tier === recommendedTier?.tier ? '#FFDD00' : '#0077B6',
      label: `${tier}: $${savings.toLocaleString()}`
    }));
  }, [calculationResults, recommendedTier]);

  // Handle form submission
  const onSubmit = (data: CalculatorFormData) => {
    setShowRecommendation(true);
    // Analytics tracking could be added here
  };

  const selectedRoute = routes.find(route => route.id === debouncedFormValues.route);

  return (
    <section className="w-full py-12 md:py-16 lg:py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-gray-900 mb-3">
            Membership ROI Calculator
          </h2>
          <p className="text-lg text-gray-600 font-lato max-w-2xl mx-auto">
            See how much you could save with a HeliHop membership based on your travel patterns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Input Controls */}
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle className="text-xl font-montserrat">Your Travel Profile</CardTitle>
              <CardDescription>Adjust the parameters to calculate your potential savings</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Frequency Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="frequency" className="block text-sm font-medium text-gray-700">
                      Frequency of Travel (trips per year)
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-blue-500 cursor-help text-sm">ⓘ</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>How many helicopter trips you expect to take annually.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center gap-4">
                    <Controller
                      name="frequency"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Slider
                          id="frequency"
                          min={1}
                          max={50}
                          step={1}
                          value={[value]}
                          onValueChange={(vals) => onChange(vals[0])}
                          className="flex-1"
                        />
                      )}
                    />
                    <Controller
                      name="frequency"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="number"
                          min={1}
                          max={50}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="w-20"
                          aria-label="Frequency of Travel"
                        />
                      )}
                    />
                  </div>
                  {errors.frequency && (
                    <p className="text-red-500 text-xs mt-1">{errors.frequency.message}</p>
                  )}
                </div>

                {/* Route Selection */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="route" className="block text-sm font-medium text-gray-700">
                      Typical Route
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-blue-500 cursor-help text-sm">ⓘ</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Select your most common travel route.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <Controller
                    name="route"
                    control={control}
                    render={({ field }) => (
                      <Select onValueChange={field.onChange} value={field.value}>
                        <SelectTrigger id="route" className="w-full">
                          <SelectValue placeholder="Select a route" />
                        </SelectTrigger>
                        <SelectContent>
                          {routes.map((route) => (
                            <SelectItem key={route.id} value={route.id}>
                              {route.name} ({route.distance} miles)
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    )}
                  />
                  {errors.route && (
                    <p className="text-red-500 text-xs mt-1">{errors.route.message}</p>
                  )}
                </div>

                {/* Passenger Count */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <label htmlFor="passengers" className="block text-sm font-medium text-gray-700">
                      Average Passenger Count
                    </label>
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <span className="text-blue-500 cursor-help text-sm">ⓘ</span>
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Number of passengers typically traveling with you.</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </div>
                  <div className="flex items-center gap-4">
                    <Controller
                      name="passengers"
                      control={control}
                      render={({ field: { onChange, value } }) => (
                        <Slider
                          id="passengers"
                          min={1}
                          max={8}
                          step={1}
                          value={[value]}
                          onValueChange={(vals) => onChange(vals[0])}
                          className="flex-1"
                        />
                      )}
                    />
                    <Controller
                      name="passengers"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          type="number"
                          min={1}
                          max={8}
                          onChange={(e) => field.onChange(Number(e.target.value))}
                          className="w-20"
                          aria-label="Passenger Count"
                        />
                      )}
                    />
                  </div>
                  {errors.passengers && (
                    <p className="text-red-500 text-xs mt-1">{errors.passengers.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Calculate Savings
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Results Display */}
          <Card className="shadow-md">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-xl font-montserrat">Your Potential Savings</CardTitle>
                <Tabs value={activeTab} onValueChange={(v) => setActiveTab(v as 'graph' | 'table')} className="w-[180px]">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="graph">Graph</TabsTrigger>
                    <TabsTrigger value="table">Table</TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>
              <CardDescription>
                {selectedRoute ? (
                  <>Based on {debouncedFormValues.frequency} trips per year on {selectedRoute.name} route with {debouncedFormValues.passengers} passenger{debouncedFormValues.passengers > 1 ? 's' : ''}</>
                ) : (
                  <>Select your travel details to see your potential savings</>
                )}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {calculationResults ? (
                <>
                  <TabsContent value="graph" className="mt-0 h-[300px]">
                    <VictoryChart
                      domainPadding={20}
                      theme={VictoryTheme.material}
                      padding={{ top: 20, bottom: 40, left: 60, right: 40 }}
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
                        tickFormat={(t) => `$${t}`}
                        style={{
                          tickLabels: { fontSize: 12, padding: 5 }
                        }}
                      />
                      <VictoryBar
                        data={chartData}
                        x="tier"
                        y="savings"
                        style={{
                          data: {
                            fill: ({ datum }) => datum.color
                          }
                        }}
                        labelComponent={
                          <VictoryTooltip
                            flyoutStyle={{
                              stroke: "#DDDDDD",
                              fill: "white"
                            }}
                          />
                        }
                      />
                    </VictoryChart>
                  </TabsContent>
                  <TabsContent value="table" className="mt-0">
                    <div className="overflow-x-auto">
                      <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                          <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Membership Tier
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Annual Cost
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Travel Cost
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Total Cost
                            </th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                              Savings
                            </th>
                          </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                          <tr className="bg-gray-100">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              No Membership
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              $0
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${calculationResults.noMembershipCost.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              ${calculationResults.noMembershipCost.toLocaleString()}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                              $0
                            </td>
                          </tr>
                          {Object.entries(calculationResults.totalCostsPerTier).map(([tier, cost]) => (
                            <tr key={tier} className={tier === recommendedTier?.tier ? "bg-yellow-50" : ""}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                {tier}
                                {tier === recommendedTier?.tier && (
                                  <Badge className="ml-2 bg-secondary text-black">Recommended</Badge>
                                )}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${membershipTiers.find(t => t.name === tier)?.annualFee.toLocaleString() || 0}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${(calculationResults.flightCostsPerTier[tier] || 0).toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                ${cost.toLocaleString()}
                              </td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-green-600">
                                ${(calculationResults.savingsPerTier[tier] || 0).toLocaleString()}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </TabsContent>
                </>
              ) : (
                <div className="h-[300px] flex items-center justify-center text-gray-500">
                  <p>Please select your travel details to see calculation results</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Recommendation Section */}
        {showRecommendation && recommendedTier && (
          <Card className="shadow-md max-w-2xl mx-auto border-secondary">
            <CardHeader className="bg-secondary/10">
              <CardTitle className="text-xl font-montserrat text-center">Your Personalized Recommendation</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-2xl font-bold font-montserrat mb-2">{recommendedTier.tier}</h3>
                <p className="mb-4 text-gray-700">
                  Based on your travel patterns, the {recommendedTier.tier} membership offers you the best value.
                </p>
                <p className="font-semibold text-xl mb-6">
                  Potential Annual Savings: <span className="text-green-600">${recommendedTier.savings.toLocaleString()}</span>
                </p>
                <Button className="bg-primary hover:bg-primary/90 px-6 py-2">
                  Schedule a Consultation
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Additional Information */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-500 max-w-2xl mx-auto">
            This calculator provides estimates based on current pricing. Actual savings may vary.
            Contact us for a personalized consultation to discuss your specific needs.
          </p>
        </div>
      </div>
    </section>
  );
}
  