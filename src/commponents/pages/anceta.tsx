import React, { useState, type ChangeEvent } from 'react';

// Типы для наших данных
interface Step {
  id: number;
  name: string;
  description: string;
}

const steps: Step[] = [
  { id: 1, name: 'Личные данные', description: 'Имя и контакт' },
  { id: 2, name: 'Специализация', description: 'Теги и навыки' },
  { id: 3, name: 'Портфолио', description: 'Загрузка файлов' },
  { id: 4, name: 'Готово', description: 'Подтверждение' },
];

const Anceta: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  
  // Состояния для формы
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [fileName, setFileName] = useState<string | null>(null);
  const [value, setValue] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const options = ['Черемша','Винтик системы','Скультор']
  // Список доступных тегов
  const availableTags = ['Веб-разработчик', 'Диджитал художник', 'UI/UX Дизайнер', 'QA Engineer'];

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setFileName(file.name);
  };

  const handleNextStep = () => {
    if (activeStep < steps.length) {
      setActiveStep(prev => prev + 1);
    }
  };

  // Функция для отображения разного контента
  const renderStepContent = () => {
    switch (activeStep) {
      case 1:
        return (
          <div className="space-y-4">
            <input type="text" placeholder="Ваше имя" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="text" placeholder="Ваш никнейм" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="email" placeholder="Email" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="password" placeholder="Password" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
            <input type="password" placeholder="Password повторите" className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none" />
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <p className="text-sm text-gray-500 mb-2">Выберите ваши роли:</p>
            <div className="flex flex-wrap gap-2">
              {availableTags.map(tag => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    selectedTags.includes(tag) 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
                  }`}
                >
                  #{tag}
                </button>
              ))}
              <input 
              type="text" 
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onFocus={() => setIsOpen(true)}
              onBlur={() => setTimeout(() => setIsOpen(false), 200)}
              placeholder='Найди свою специальность'
              className='w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-400 outline-none'
              />
              {isOpen && (
                options
                  .filter((opt) => opt.toLowerCase().includes(value.toLowerCase()))
                  .map((opt) => (
                    <button
                      key={opt}
                  className={`px-4 py-2 rounded-full border text-sm transition-colors ${
                    selectedTags.includes(opt) 
                      ? 'bg-blue-600 text-white border-blue-600' 
                      : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'}`}
                      onClick={() => {
                        setValue(opt);
                        setIsOpen(false);
                      }}
                    >
                      #{opt}
                    </button>

                  ))
              )}
            </div>
          </div>
        );
      case 3:
        return (
          <div className="space-y-4">
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <h1>Здесь пока ни чего нет ¯\_(ツ)_/¯ </h1>
            </label>
          </div>
        );
      case 4:
        return (
          <div className="text-center p-6 bg-blue-50 rounded-lg">
            <h3 className="text-blue-800 font-bold">Проверьте данные</h3>
            <p className="text-sm text-blue-600 mt-2">Выбрано тегов: {selectedTags.length}</p>
            <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">Отправить форму</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-50 p-4">
      {/* Меню */}
      <nav className="w-72 space-y-2 pr-6 border-r border-gray-200">
        <h2 className="text-xl font-bold text-gray-800 p-2 mb-4">Анкета</h2>
        {steps.map((step) => {
          const isActive = step.id === activeStep;
          return (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className={`w-full text-left p-3 rounded-xl transition-all duration-200 ${
                isActive ? 'bg-white shadow-md text-blue-600' : 'text-gray-500 hover:bg-gray-200/50'
              }`}
            >
              <div className="font-bold text-sm uppercase tracking-wider">{step.name}</div>
              <div className="text-xs opacity-70">{step.description}</div>
            </button>
          );
        })}
      </nav>

      {/* Контент */}
      <div className="flex-1 max-w-2xl mx-auto p-10 flex flex-col justify-between">
        <div>
          <div className="mb-8">
            <span className="text-blue-600 font-bold text-sm tracking-widest uppercase">Шаг {activeStep}</span>
            <h1 className="text-3xl font-black text-gray-900">{steps.find(s => s.id === activeStep)?.name}</h1>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            {renderStepContent()}
          </div>
        </div>

        {/* Правый нижний угол для кнопки навигации */}
        {activeStep < steps.length && (
          <div className="flex justify-end mt-6">
            <button
              onClick={handleNextStep}
              className="bg-blue-600 text-white px-6 py-2.5 rounded-xl shadow-md hover:bg-blue-700 transition-all font-medium text-sm"
            >
              {activeStep === steps.length - 1 ? 'Готово' : 'Далее →'}
            </button>
          </div>
        )}
      </div>
      
    </div>
  );
};

export default Anceta;
