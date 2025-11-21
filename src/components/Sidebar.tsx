interface SidebarItemProps {
  active: boolean;
  icon: string;
  label: string;
  onClick: () => void;
}

const SidebarItem = ({ active, icon, label, onClick }: SidebarItemProps) => (
  <button
    onClick={onClick}
    className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium ${
      active
        ? 'bg-white text-slate-900 shadow-sm'
        : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    <span className="text-lg leading-none">{icon}</span>
    <span>{label}</span>
  </button>
);

interface Category {
  id: string;
  label: string;
  icon: string;
}

interface SidebarProps {
  categories: Category[];
  activeCategory: string;
  onCategoryChange: (categoryId: string) => void;
}

export const Sidebar = ({ categories, activeCategory, onCategoryChange }: SidebarProps) => (
  <aside className="hidden w-64 flex-shrink-0 border-r border-slate-200 bg-slate-50/80 p-3 md:block">
    <nav className="space-y-1">
      {categories.map((cat) => (
        <SidebarItem
          key={cat.id}
          icon={cat.icon}
          label={cat.label}
          active={cat.id === activeCategory}
          onClick={() => onCategoryChange(cat.id)}
        />
      ))}
    </nav>
  </aside>
);
