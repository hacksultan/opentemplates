import React from 'react';

const PricingSection: React.FC = () => {
  const plans = [
    {
      name: 'Free',
      price: '$0',
      period: 'forever',
      description: 'Perfect for trying out SuperWhisper',
      features: [
        '10 minutes of transcription per day',
        'Basic accuracy',
        'Text export only',
        'Community support',
      ],
      buttonText: 'Download Free',
      popular: false,
    },
    {
      name: 'Pro',
      price: '$19',
      period: 'per month',
      description: 'For professionals and content creators',
      features: [
        'Unlimited transcription',
        'Highest accuracy AI models',
        'All export formats',
        'Priority support',
        'Custom vocabulary',
        'Batch processing',
      ],
      buttonText: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Team',
      price: '$49',
      period: 'per month',
      description: 'For teams and organizations',
      features: [
        'Everything in Pro',
        'Team management',
        'Shared transcriptions',
        'Admin controls',
        'API access',
        'Enterprise support',
      ],
      buttonText: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-base font-semibold leading-7 text-yellow-600">Pricing</h2>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Start with our free plan and upgrade as your needs grow. All plans include our core transcription features.
          </p>
        </div>
        
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-3xl p-8 ring-1 xl:p-10 ${
                plan.popular
                  ? 'bg-gray-900 ring-gray-900'
                  : 'bg-white ring-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="flex items-center justify-between gap-x-4">
                  <h3 className="text-yellow-400 text-lg font-semibold leading-8">
                    {plan.name}
                  </h3>
                  <p className="rounded-full bg-yellow-500/10 px-2.5 py-1 text-xs font-semibold leading-5 text-yellow-400">
                    Most popular
                  </p>
                </div>
              )}
              {!plan.popular && (
                <h3 className="text-gray-900 text-lg font-semibold leading-8">
                  {plan.name}
                </h3>
              )}
              <p className={`mt-4 text-sm leading-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className={`text-4xl font-bold tracking-tight ${plan.popular ? 'text-white' : 'text-gray-900'}`}>
                  {plan.price}
                </span>
                <span className={`text-sm font-semibold leading-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                  {plan.period}
                </span>
              </p>
              <button
                className={`mt-6 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.popular
                    ? 'bg-yellow-500 text-white shadow-sm hover:bg-yellow-400 focus-visible:outline-yellow-500'
                    : 'bg-yellow-600 text-white shadow-sm hover:bg-yellow-500 focus-visible:outline-yellow-600'
                }`}
              >
                {plan.buttonText}
              </button>
              <ul className={`mt-8 space-y-3 text-sm leading-6 ${plan.popular ? 'text-gray-300' : 'text-gray-600'}`}>
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex gap-x-3">
                    <svg
                      className={`h-6 w-5 flex-none ${plan.popular ? 'text-yellow-400' : 'text-yellow-600'}`}
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
