import { ExternalLink } from "lucide-react";
import ChatInput from "./ChatInput";
import ModelCard from "./ModelCard";
import ProviderButton from "./ProviderButton";
import { RoutingCurvesHorizontal } from "./RoutingCurves";

export default function HeroSection() {
  return (
    <div className="flex flex-col items-center gap-24 px-6 md:gap-28 md:px-8 md:pt-8">
      <div className="flex w-full max-w-4xl flex-col justify-center py-8 md:py-0">
        <div className="mb-3 flex flex-col gap-2 md:-mb-48 md:gap-1">
          <h1 className="my-0 w-full py-0 text-5xl font-semibold">
            <span className="mb-1 hidden md:block">The Unified</span>
            <span className="hidden md:block">Interface For LLMs</span>
            <span className="flex flex-col gap-0.5 text-3xl md:hidden">
              <div>The Unified</div>
              <div>Interface For LLMs</div>
            </span>
          </h1>
          <p className="text-slate-11 text-md mb-4 md:mb-8 md:pt-2 md:text-xl">
            Better{" "}
            <a 
              href="https://openrouter.ai/models?order=pricing-low-to-high"
              className="text-primary hover:underline"
            >
              prices
            </a>
            , better{" "}
            <a 
              href="https://openrouter.ai/docs/features/uptime-optimization"
              className="text-primary hover:underline"
            >
              uptime
            </a>
            , no subscription.
          </p>
        </div>

        <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-16 min-w-full flex-shrink-0">
          <ChatInput />
          
          <div className="w-full min-w-80 space-y-3 md:w-auto">
            <div className="block md:hidden">
              <RoutingCurvesHorizontal />
              <div className="grid grid-cols-3 gap-4 pb-3">
                <ProviderButton 
                  provider="google"
                  icon="https://openrouter.ai/images/icons/GoogleGemini.svg"
                  alt="Favicon for google"
                />
                <ProviderButton 
                  provider="openai"
                  icon="https://openrouter.ai/images/icons/OpenAI.svg"
                  alt="Favicon for openai"
                  invert={true}
                />
                <ProviderButton 
                  provider="anthropic"
                  icon="https://openrouter.ai/images/icons/Anthropic.svg"
                  alt="Favicon for anthropic"
                />
              </div>
              
              <ModelCard
                name="GPT-4.1"
                provider="openai"
                providerIcon="https://openrouter.ai/images/icons/OpenAI.svg"
                tokensPerWeek="47.0B"
                latency="771ms"
                weeklyGrowth="-1.71%"
                isGrowthPositive={false}
              />
              
              <div className="flex items-center justify-between px-2 pt-4">
                <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                <a 
                  className="text-primary text-xs hover:underline flex items-center gap-1"
                  href="https://openrouter.ai/rankings?view=trending"
                >
                  View Trending
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
            
            <div className="hidden space-y-3 md:block">
              <div className="flex items-center justify-between">
                <h2 className="text-slate-11 text-sm font-medium">Featured Models</h2>
                <a 
                  className="text-primary text-xs hover:underline flex items-center gap-1"
                  href="https://openrouter.ai/rankings?view=trending"
                >
                  View Trending
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}