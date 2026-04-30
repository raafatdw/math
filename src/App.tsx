import { useState } from 'react';
import { Trophy, CheckCircle2, ImageIcon, Navigation, Puzzle, PenTool, MousePointerClick } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AdditionActivity = () => {
  // מצבים (States) עבור התשובות
  const [picAns, setPicAns] = useState('');
  const [lineAns, setLineAns] = useState('');
  
  const [break1, setBreak1] = useState('');
  const [break2, setBreak2] = useState('');
  const [breakTotal, setBreakTotal] = useState('');

  const [ans1, setAns1] = useState('');
  const [ans2, setAns2] = useState('');
  const [ans3, setAns3] = useState('');
  
  const [selectedGroup, setSelectedGroup] = useState<number | null>(null);

  // רכיב כותרת של משימה
  const SectionHeader = ({ number, title, colorClass, icon: Icon }: { number: string, title: string, colorClass: string, icon: any }) => (
    <div className={`flex items-center gap-3 mb-6 ${colorClass} text-white px-5 py-2 rounded-full inline-flex rounded-br-none shadow-sm`}>
      <div className="bg-white text-black font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0 shadow-inner">
        {number}
      </div>
      <h2 className="font-bold text-xl flex items-center gap-2">
        {Icon && <Icon size={20} />}
        {title}
      </h2>
    </div>
  );

  // רכיב שדה קלט מותאם
  const NumberInput = ({ value, onChange, correctValue, id }: { value: string, onChange: (v: string) => void, correctValue: string, id?: string }) => {
    const isCorrect = value === correctValue;
    return (
      <div className="relative inline-block" id={id}>
        <input 
          type="number" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`w-16 h-16 text-center text-2xl font-bold border-4 rounded-2xl focus:outline-none transition-all
            ${isCorrect ? 'border-green-500 bg-green-50 text-green-700' : 'border-gray-200 hover:border-gray-300'}`}
        />
        <AnimatePresence>
          {isCorrect && (
            <motion.div 
              initial={{ scale: 0, opacity: 0, rotate: -45 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              className="absolute -top-3 -right-3 bg-white rounded-full"
            >
              <CheckCircle2 className="text-green-500 w-8 h-8 drop-shadow-sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  };

  return (
    <div dir="rtl" className="min-h-screen bg-sky-50 p-4 md:p-8 font-sans text-gray-800">
      
      {/* כותרת ראשית */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-center mb-10"
      >
        <h1 className="text-5xl font-extrabold text-blue-600 mb-2 drop-shadow-sm">
          نتدرب على <span className="text-6xl text-blue-700">الجمع!</span> ✏️
        </h1>
        <p className="text-xl text-gray-600 font-medium mt-4">
          أكملوا جميع المهام واجمعوا النجاحات
        </p>
      </motion.div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* משימה 1: חיבור בתמונות */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white border-4 border-green-400 rounded-3xl p-6 shadow-sm flex flex-col"
        >
          <SectionHeader number="1" title="الجمع بالصور" colorClass="bg-green-500" icon={ImageIcon} />
          <p className="text-lg font-medium text-gray-600 mb-6">كم عدد التفاحات في المجموع؟</p>
          
          <div className="flex items-center justify-center gap-4 flex-1" dir="ltr">
            <div className="bg-red-50 p-4 rounded-2xl border-2 border-red-100 text-center">
              <span className="text-4xl block mb-2">🍎🍎🍎</span>
              <span className="font-bold text-red-600 text-xl">3</span>
            </div>
            <div className="text-5xl font-bold text-gray-300">+</div>
            <div className="bg-green-50 p-4 rounded-2xl border-2 border-green-100 text-center">
              <span className="text-4xl block mb-2">🍎🍎🍎🍎</span>
              <span className="font-bold text-green-600 text-xl">4</span>
            </div>
            <div className="text-5xl font-bold text-gray-300">=</div>
            <NumberInput value={picAns} onChange={setPicAns} correctValue="7" />
          </div>
        </motion.div>

        {/* משימה 2: קופצים על הציר */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white border-4 border-orange-400 rounded-3xl p-6 shadow-sm flex flex-col"
        >
          <SectionHeader number="2" title="القفز على خط الأعداد" colorClass="bg-orange-500" icon={Navigation} />
          <p className="text-lg font-medium text-gray-600 mb-2">بدأنا من 3 وقفزنا 4 خطوات. إلى أين وصلنا؟</p>
          
          <div className="relative w-full h-32 flex flex-col items-center justify-center my-4">
            <svg viewBox="0 0 400 100" className="w-full max-w-md h-full overflow-visible">
              <motion.path 
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                d="M 120 60 Q 135 20 150 60" fill="transparent" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" 
              />
              <path d="M 150 60 Q 165 20 180 60" fill="transparent" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
              <path d="M 180 60 Q 195 20 210 60" fill="transparent" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
              <path d="M 210 60 Q 225 20 240 60" fill="transparent" stroke="#f97316" strokeWidth="3" strokeLinecap="round" strokeDasharray="4 4" />
              
              <line x1="20" y1="60" x2="380" y2="60" stroke="#333" strokeWidth="3" />
              <polygon points="380,55 390,60 380,65" fill="#333" />
              <polygon points="20,55 10,60 20,65" fill="#333" />

              {[0,1,2,3,4,5,6,7,8,9,10].map((num, i) => (
                <g key={num}>
                  <line x1={30 + i * 30} y1="50" x2={30 + i * 30} y2="70" stroke="#333" strokeWidth="2" />
                  {num === 3 && <circle cx={30 + i * 30} cy="85" r="12" fill="#fed7aa" />}
                  {(num === 7 && lineAns === '7') && <circle cx={30 + i * 30} cy="85" r="12" fill="#bbf7d0" />}
                  <text x={30 + i * 30} y="90" textAnchor="middle" fontSize="16" fontWeight="bold" fill="#333">{num}</text>
                </g>
              ))}
            </svg>
          </div>

          <div className="flex items-center justify-center gap-4 text-3xl font-bold mt-auto" dir="ltr">
            <span>3</span>
            <span className="text-orange-500">+</span>
            <span>4</span>
            <span className="text-gray-400">=</span>
            <NumberInput value={lineAns} onChange={setLineAns} correctValue="7" />
          </div>
        </motion.div>

        {/* משימה 3: מפרקים ופותרים */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white border-4 border-purple-400 rounded-3xl p-6 shadow-sm flex flex-col"
        >
          <SectionHeader number="3" title="نفكك ونحل" colorClass="bg-purple-500" icon={Puzzle} />
          <p className="text-lg font-medium text-gray-600 mb-6">حلوا التمرين <strong className="text-2xl text-purple-700">8 + 5</strong> بمساعدة الإكمال إلى 10:</p>
          
          <div className="flex flex-col items-center gap-6 bg-purple-50 p-6 rounded-2xl">
            <div className="flex items-center justify-center gap-4 text-2xl font-bold" dir="ltr">
              <span>8</span>
              <span className="text-purple-400">+</span>
              <NumberInput value={break1} onChange={setBreak1} correctValue="2" />
              <span className="text-gray-400">=</span>
              <span className="bg-white px-4 py-2 rounded-xl border-2 border-purple-200">10</span>
            </div>
            
            <div className="flex items-center justify-center gap-4 text-2xl font-bold" dir="ltr">
              <span className="bg-white px-4 py-2 rounded-xl border-2 border-purple-200">10</span>
              <span className="text-purple-400">+</span>
              <NumberInput value={break2} onChange={setBreak2} correctValue="3" />
              <span className="text-gray-400">=</span>
              <span className="bg-white px-4 py-2 rounded-xl border-2 border-purple-200">13</span>
            </div>

            <div className="w-full h-px bg-purple-200 my-2"></div>

            <div className="flex items-center justify-center gap-4 text-3xl font-extrabold text-purple-900" dir="ltr">
              <span>8 + 5 =</span>
              <NumberInput value={breakTotal} onChange={setBreakTotal} correctValue="13" />
            </div>
          </div>
        </motion.div>

        {/* משימה 4: תרגול מהיר */}
        <motion.div 
          whileHover={{ scale: 1.01 }}
          className="bg-white border-4 border-teal-400 rounded-3xl p-6 shadow-sm flex flex-col"
        >
          <SectionHeader number="4" title="تدريب سريع" colorClass="bg-teal-500" icon={PenTool} />
          <p className="text-lg font-medium text-gray-600 mb-6">أكملوا نتائج التمارين التالية:</p>
          
          <div className="space-y-6 flex-1 flex flex-col justify-center">
            
            {[
              { id: '1', q: '5 + 3', correct: '8', val: ans1, set: setAns1 },
              { id: '2', q: '6 + 2', correct: '8', val: ans2, set: setAns2 },
              { id: '3', q: '7 + 4', correct: '11', val: ans3, set: setAns3 }
            ].map((item) => (
              <div key={item.id} className="flex items-center justify-start gap-6 bg-teal-50 px-6 py-3 rounded-2xl text-3xl font-bold border-2 border-teal-100" dir="ltr">
                <div className="flex gap-4">
                  <span>{item.q.split(' + ')[0]}</span>
                  <span className="text-teal-500">+</span>
                  <span>{item.q.split(' + ')[1]}</span>
                  <span className="text-gray-400">=</span>
                </div>
                <NumberInput value={item.val} onChange={item.set} correctValue={item.correct} />
              </div>
            ))}

          </div>
        </motion.div>

        {/* משימה 5: בחירת קבוצה */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white border-4 border-pink-400 rounded-3xl p-6 shadow-sm md:col-span-2"
        >
          <SectionHeader number="5" title="نختار مجموعة" colorClass="bg-pink-500" icon={MousePointerClick} />
          
          <div className="text-center mb-8">
            <h3 className="font-medium text-xl text-gray-600 mb-4">
              أي صورة تناسب التمرين التالي؟ اضغطوا عليها!
            </h3>
            <div className="inline-flex items-center gap-4 bg-pink-50 px-8 py-3 rounded-2xl border-2 border-pink-200 font-extrabold text-4xl shadow-sm" dir="ltr">
              <span className="text-pink-600">2</span>
              <span className="text-gray-400">+</span>
              <span className="text-pink-600">5</span>
              <span className="text-gray-400">=</span>
              <span className="text-purple-700">7</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* אופציה 1 (נכונה) */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGroup(1)}
              className={`p-6 rounded-2xl flex flex-col items-center transition-all border-4 
                ${selectedGroup === 1 ? 'border-green-500 bg-green-50 scale-105' : 'border-gray-100 bg-white hover:border-pink-300 hover:bg-pink-50'}`}
            >
              <div className="flex gap-4 text-3xl mb-4 h-20 items-center" dir="ltr">
                <div>🍎🍎</div>
                <div className="font-bold text-gray-300">+</div>
                <div>🍎🍎<br/>🍎🍎🍎</div>
              </div>
              <div className={`w-10 h-10 rounded-full border-4 flex items-center justify-center transition-colors
                ${selectedGroup === 1 ? 'border-green-500 bg-green-500' : 'border-gray-200 bg-white'}`}>
                {selectedGroup === 1 && <CheckCircle2 size={24} className="text-white" />}
              </div>
            </motion.button>

            {/* אופציה 2 */}
            <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGroup(2)}
              className={`p-6 rounded-2xl flex flex-col items-center transition-all border-4 
                ${selectedGroup === 2 ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-white hover:border-pink-300 hover:bg-pink-50'}`}
            >
              <div className="flex gap-4 text-3xl mb-4 h-20 items-center" dir="ltr">
                <div>🍊🍊🍊</div>
                <div className="font-bold text-gray-300">+</div>
                <div>🍊🍊🍊<br/>🍊</div>
              </div>
              <div className={`w-10 h-10 rounded-full border-4 transition-colors
                ${selectedGroup === 2 ? 'border-red-400 bg-red-400' : 'border-gray-200 bg-white'}`}>
              </div>
            </motion.button>

             {/* אופציה 3 */}
             <motion.button 
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedGroup(3)}
              className={`p-6 rounded-2xl flex flex-col items-center transition-all border-4 
                ${selectedGroup === 3 ? 'border-red-400 bg-red-50' : 'border-gray-100 bg-white hover:border-pink-300 hover:bg-pink-50'}`}
            >
              <div className="flex gap-4 text-2xl mb-4 h-20 items-center text-yellow-400 drop-shadow-sm" dir="ltr">
                <div className="leading-tight">⭐<br/>⭐</div>
                <div className="font-bold text-gray-300 text-3xl">+</div>
                <div className="leading-tight">⭐⭐⭐<br/>⭐⭐</div>
              </div>
              <div className={`w-10 h-10 rounded-full border-4 transition-colors
                ${selectedGroup === 3 ? 'border-red-400 bg-red-400' : 'border-gray-200 bg-white'}`}>
              </div>
            </motion.button>
          </div>
        </motion.div>

      </div>

      {/* אזור סיום / חיווי */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-8 bg-yellow-400 rounded-3xl p-6 text-center shadow-md flex flex-col sm:flex-row items-center justify-center gap-6 border-4 border-yellow-500"
      >
        <motion.div
           animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
           transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
        >
          <Trophy size={64} className="text-white drop-shadow-md" />
        </motion.div>
        <div className="text-white text-right">
          <h2 className="text-3xl font-extrabold mb-1">عمل رائع!</h2>
          <p className="text-xl font-medium">استمروا هكذا وستصبحون أبطالاً في الجمع ⭐</p>
        </div>
      </motion.div>

    </div>
  );
};

export default function App() {
  return <AdditionActivity />;
}
