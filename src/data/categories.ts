export interface Category {
  id: string;
  label: string;
  icon: string;
}

export const categories: Category[] = [
  { id: 'intro', label: 'Introducción', icon: '📚' },
  { id: 'modeling', label: 'Proceso de Modelado', icon: '💡' },
  { id: 'strategic', label: 'DDD Estratégico', icon: '🎯' },
  { id: 'tactical', label: 'DDD Táctico', icon: '⚙️' },
  { id: 'tools', label: 'Herramientas DDD', icon: '⚒️' },
  { id: 'conclusions', label: 'Conclusiones', icon: '✅' },
  { id: 'glossary', label: 'Glossario', icon: '📖' },
];
