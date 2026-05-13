import { useState } from "react";
import { Button } from "../common/Button";
import { Card } from "../common/Card";
import { Home } from "../common/heder";

export function MainComp() {
    const [isModalOpen, setIsModalOpen] = useState(false
    )
    return(
        <div className=" relative">
            <main>
                <Home/>
                <div className="grid justify-items-center p-52 gap-10">
                    <h1 className="text-7xl font-black">Свайпай не людей - <p/>свайпай таланты.</h1>
                    <h2>Dupled — Tinder для творческих коллабораций. Найди того, с кем <p/> сделаешь проект, а не отношения.</h2>
                <div className="flex gap-6">
                    <Button >
                        Я здесь, чтобы меня нашли
                    </Button>
                    <Button>
                        Найти соавтора
                    </Button>
                </div>
            </div>
            </main>
           <div className="my-14 border-t-2 border-dashed border-gray-300"></div>
           <section className="flex flex-col items-center gap-12 px-4">
    <h1 className="text-3xl font-bold">Творчество не любит одиночества</h1>
    
    {/* Контейнер с ограничением ширины, чтобы блоки не разъезжались слишком сильно */}
    <div className="flex justify-center gap-8 w-full max-w-5xl">
        
        {/* Первый блок */}
        <div className="flex-1 bg-blue-600 p-6 rounded-lg text-white">
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">Боль</li>
                <li>«Варюсь в собственном соку»</li>
                <li>Читаю 100500 сообщений «ищу команду»</li>
                <li>Непонятно, кто что умеет</li>

            </ul>
        </div>

        {/* Второй блок */}
        <div className="flex-1 bg-blue-500 p-6 rounded-lg text-white">
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">Решение Dupled</li>
                <li> Ты указываешь, кто ты</li>
                <li> Ты указываешь, кто тебе нужен</li>
                <li> Алгоритм матчит скилл + запрос</li>
            </ul>
        </div>
        
    </div>
    <div className="my-14">«Художник не ищет "кого-нибудь". Он ищет поэта, который пишет про город. А алгоритм это понимает.»</div>
</section>
<div className="my-[100px] border-t-2 border-dashed border-gray-300"></div>
<section className="flex flex-col items-center gap-12 px-4">
    <h1 className="text-3xl font-bold">Как работает</h1>
    
    {/* Контейнер с ограничением ширины, чтобы блоки не разъезжались слишком сильно */}
    <div className="flex justify-center gap-8 w-full max-w-5xl">
        
        {/* Первый блок */}
        <div className="flex-1 bg-blue-600 p-6 rounded-lg text-white">
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">Боль</li>
                <li>Укажи профессию</li>
                <li>Художник Копирайтер 3D-моделл</li>
             

            </ul>
        </div>

        {/* Второй блок */}
        <div className="flex-1 bg-blue-500 p-6 rounded-lg text-white">
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">Решение Dupled</li>
                <li>Листай профили</li>
                <li> Вправо = В команду <p/> Влево = Не по пути</li>
            </ul>
        </div>
        {/* Третий блок */}
        <div className="flex-1 bg-blue-400 p-6 rounded-lg text-white">
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">Решение Dupled</li>
                <li>Нашли друг друга</li>
                <li> GitHub /Miro/Чат</li>
            </ul>
        </div>
    </div>
    
</section>
<div className="my-14 border-t-2 border-dashed border-gray-300"></div>
<section className="flex flex-col items-center gap-12 px-4">
    <h1 className="text-3xl font-bold">Примеры проектов</h1>
    
    {/* Контейнер с ограничением ширины, чтобы блоки не разъезжались слишком сильно */}
    <div className="flex justify-center gap-8 w-full  max-w-5xl">
        
        {/* Первый блок */}
        <div className="flex-1 bg-blue-600 flex flex-col justify-center items-center p-6 rounded-lg text-white h-80 cursor-pointer hover:translate-y-0.5 hover:shadow-2xl transition" onClick={() => setIsModalOpen(true)}>
            
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">КАКОЙ-ТО ОЧЕНЬ КРУТОЙ ПРОЕКТ 3</li>
            </ul>
        </div>

        {/* Второй блок */}
        <div className="flex-1 bg-blue-500 p-6 rounded-lg flex flex-col justify-center items-center text-white hover:translate-y-0.5 cursor-pointer hover:shadow-2xl transition" >
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">КАКОЙ-ТО ОЧЕНЬ КРУТОЙ ПРОЕКТ 2</li>
            </ul>
        </div>
        {/* Третий блок */}
        <div className="flex-1 bg-blue-400 p-6 rounded-lg flex flex-col justify-center items-center text-white cursor-pointer hover:translate-y-0.5 hover:shadow-2xl transition">
            <ul className="flex flex-col items-center gap-2">
                <li className="font-bold text-xl mb-2">КАКОЙ-ТО ОЧЕНЬ КРУТОЙ ПРОЕКТ 1</li>
            </ul>
        </div>
    </div>
</section>
<div className="my-14 border-t-2 border-dashed border-gray-300"></div>
<div>
    
</div>
{isModalOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm " onClick={() => setIsModalOpen(false)} >
                    <div className=" bg-white flex flex-col h-3/4 w-3/5 rounded-3xl overflow-hidden">
                        <div className="grid grid-cols-[1fr_1fr] h-full">
                            <div className="bg-blue-950 flex flex-col gap-4 p-4 h-full">
                                <img src="https://placeholder.com" alt="img1" className="w-full rounded-lg" />
                                <img src="https://placeholder.com" alt="img2" className="w-full rounded-lg" />
                            </div>
                            <div className="p-8 overflow-y-auto">
                                <h1 className="text-2xl p-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, esse.</h1>
                            <div className="col-span-2 row-span-2"> 
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente quo recusandae fuga pariatur ratione, fugiat provident repellendus. Dignissimos officiis dolore cum voluptate molestias. Expedita eum aliquam nihil suscipit facere dolore?
                                Vero molestias, iste quidem sit voluptatem ipsum porro minus, numquam nam cum voluptatum exercitationem veritatis. Velit, quasi porro minus molestias aspernatur perferendis, eligendi tempore quibusdam eius dolores modi ab sit.
                                Accusamus debitis expedita sequi necessitatibus id exercitationem voluptatum maiores, dolores quidem doloremque nemo eum facere aliquam ipsum facilis ipsa? Molestiae delectus perferendis architecto beatae aliquid quam nihil non natus possimus?
                                Quidem quo atque fugit laborum, voluptatem, ipsum minima aliquam sit praesentium ipsa omnis. Consectetur porro dolore ducimus ipsa blanditiis ad rem repellat, ullam sed, suscipit non corrupti similique officia fugiat.
                                Possimus voluptate, et libero quia inventore vitae tempora eligendi cupiditate dolor itaque aliquam quas. Quam, expedita. Dignissimos, optio libero rerum dolorum, deleniti eaque id error eveniet delectus rem inventore iste.
                            </div>
                            </div>
                            
                          

                        </div>
                    </div>
                </div>
            )

            }
</div>
    )
}