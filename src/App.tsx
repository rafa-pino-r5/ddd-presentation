import { useState } from 'react';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { SlideCard } from './components/SlideCard';
import { Badge } from './components/ui/Badge';
import { categories } from './data/categories';
import { slides } from './data/slideData';

function App() {
  const [activeCategory, setActiveCategory] = useState('intro');
  const activeSlides = slides.filter((slide) => slide.category === activeCategory);
  const activeCategoryData = categories.find((c) => c.id === activeCategory);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex flex-1 overflow-hidden">
        <Sidebar
          categories={categories}
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        
        <section className="flex-1 overflow-y-auto bg-slate-50 px-4 py-6 md:px-8">
          <div className="mx-auto max-w-5xl space-y-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <h2 className="text-2xl font-semibold text-slate-900">
                  {activeCategoryData?.label}
                </h2>
                <p className="mt-1 text-sm text-slate-500">
                  Selecciona una sección en el menú lateral para navegar por la guía.
                </p>
              </div>
              <Badge>{activeCategoryData?.icon} Sección</Badge>
            </div>

            <div className="space-y-6">
              {activeSlides.length === 0 ? (
                <p className="text-sm text-slate-500">
                  No hay contenido definido aún para esta sección.
                </p>
              ) : (
                activeSlides.map((slide) => (
                  <SlideCard
                    key={slide.id}
                    title={slide.title}
                    pitch={slide.pitch}
                    image={slide.image}
                    patterns={slide.patterns}
                  />
                ))
              )}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
