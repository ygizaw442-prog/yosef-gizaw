
import React, { useState, useEffect } from 'react';
import { generateOriTechConcept } from './services/geminiService';
import type { OriTechConcept } from './types';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Section from './components/Section';
import ProductCategoryCard from './components/ProductCategoryCard';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

const App: React.FC = () => {
  const [concept, setConcept] = useState<OriTechConcept | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchConcept = async () => {
      try {
        setIsLoading(true);
        const result = await generateOriTechConcept();
        setConcept(result);
        setError(null);
      } catch (err) {
        if (err instanceof Error) {
            setError(`Failed to generate concept: ${err.message}. Ensure your API key is configured correctly.`);
        } else {
            setError('An unknown error occurred.');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchConcept();
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <div className="text-center p-8 bg-red-900/50 rounded-lg shadow-xl">
          <h1 className="text-2xl font-bold text-red-400 mb-4">Error</h1>
          <p className="text-red-200">{error}</p>
        </div>
      </div>
    );
  }

  if (!concept) {
    return null;
  }

  const {
    brandStory,
    mission,
    vision,
    productCategories,
    targetAudience,
    valueProposition,
    marketingTone,
    uiUxStyle,
    colorPalette,
    taglines,
  } = concept;

  return (
    <div className={`font-sans antialiased`} style={{ backgroundColor: colorPalette.background, color: colorPalette.text }}>
      <Header />
      <main>
        <HeroSection tagline={taglines[0] || "Your Gateway to Technology"} accentColor={colorPalette.accent} />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-20">
          <Section title="Our Story">
            <p className="text-lg leading-relaxed">{brandStory}</p>
          </Section>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Section title="Our Mission">
              <p className="text-lg leading-relaxed">{mission}</p>
            </Section>
            <Section title="Our Vision">
              <p className="text-lg leading-relaxed">{vision}</p>
            </Section>
          </div>

          <Section title="Product Categories">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-8">
              {productCategories.map((category) => (
                <ProductCategoryCard key={category.name} category={category} accentColor={colorPalette.accent} />
              ))}
            </div>
          </Section>
          
          <div className="grid lg:grid-cols-3 gap-12 bg-black/20 p-8 rounded-2xl">
              <Section title="Target Audience">
                <p className="text-lg leading-relaxed">{targetAudience}</p>
              </Section>
              <Section title="Value Proposition">
                <p className="text-lg leading-relaxed">{valueProposition}</p>
              </Section>
              <Section title="Marketing Tone">
                <p className="text-lg leading-relaxed">{marketingTone}</p>
              </Section>
          </div>
          
           <Section title="Style Guide">
            <div className="grid md:grid-cols-2 gap-12 mt-8">
                <div className="bg-black/20 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colorPalette.primary }}>{uiUxStyle.title}</h3>
                    <p className="text-lg leading-relaxed">{uiUxStyle.description}</p>
                </div>
                <div className="bg-black/20 p-8 rounded-2xl">
                    <h3 className="text-2xl font-bold mb-4" style={{ color: colorPalette.primary }}>Color Palette</h3>
                    <p className="mb-4 text-lg leading-relaxed">{colorPalette.description}</p>
                    <div className="flex flex-wrap gap-4">
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: colorPalette.primary }}></div>
                            <p className="mt-2 text-sm">Primary</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: colorPalette.secondary }}></div>
                            <p className="mt-2 text-sm">Secondary</p>
                        </div>
                        <div className="text-center">
                            <div className="w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: colorPalette.accent }}></div>
                            <p className="mt-2 text-sm">Accent</p>
                        </div>
                         <div className="text-center">
                            <div className="w-16 h-16 rounded-full shadow-lg border border-white/20" style={{ backgroundColor: colorPalette.background }}></div>
                            <p className="mt-2 text-sm">Background</p>
                        </div>
                         <div className="text-center">
                            <div className="w-16 h-16 rounded-full shadow-lg" style={{ backgroundColor: colorPalette.text }}></div>
                            <p className="mt-2 text-sm">Text</p>
                        </div>
                    </div>
                </div>
            </div>
          </Section>

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
