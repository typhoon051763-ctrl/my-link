import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-50 dark:bg-black p-8 font-sans">
      <main className="flex flex-col items-center max-w-2xl w-full bg-white dark:bg-zinc-900 rounded-3xl shadow-xl overflow-hidden">
        {/* Header Section */}
        <div className="w-full h-48 bg-gradient-to-r from-green-400 to-blue-500 flex items-center justify-center">
          <div className="relative w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden bg-white">
             {/* Placeholder for Profile Image */}
             <div className="w-full h-full flex items-center justify-center bg-zinc-100">
               <span className="text-4xl text-zinc-400">👤</span>
             </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col items-center p-8 sm:p-12 text-center">
          <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50 mb-2">
            김태묵
          </h1>
          <p className="text-xl font-medium text-green-600 dark:text-green-400 mb-6">
            미래 조경 전문가 | 기후 적응형 인프라 연구원
          </p>

          <div className="space-y-6 text-zinc-600 dark:text-zinc-400 leading-relaxed text-left sm:text-center">
            <section>
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2 text-center">
                학력 및 전문성
              </h2>
              <p>
                상명대학교 그린스마트시티학과 (구 조경학과) 재학 중인 김태묵입니다. 
                데이터 기반의 기후 적응형 도시 인프라와 미래 지향적 조경 모델을 연구하고 있습니다.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2 text-center">
                주요 수상 내역
              </h2>
              <div className="bg-zinc-50 dark:bg-zinc-800 p-4 rounded-xl border border-zinc-100 dark:border-zinc-700 text-center">
                <h3 className="font-bold text-zinc-900 dark:text-zinc-50">
                  제5회 한국종합기술 조경레저부 아이디어 경진대회 대상
                </h3>
                <p className="text-sm mt-1">수상작: 2125 THE STANDARD : SEOUL FOREST</p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-zinc-800 dark:text-zinc-200 mb-2 text-center">
                프로젝트 비전
              </h2>
              <p>
                서울숲을 단순한 휴식 공간을 넘어 도시를 운영하는 '기후·환경 인프라'로 전환하는 것을 제안했습니다. 
                기술과 자연이 융합된 지속 가능한 도시 환경을 구축하는 것이 저의 목표입니다.
              </p>
            </section>
          </div>

          <div className="mt-10 flex gap-4">
            <button className="px-6 py-2 bg-zinc-900 dark:bg-zinc-50 text-white dark:text-zinc-900 rounded-full font-medium transition-transform hover:scale-105">
              포트폴리오 보기
            </button>
            <button className="px-6 py-2 border border-zinc-300 dark:border-zinc-700 rounded-full font-medium transition-transform hover:scale-105">
              문의하기
            </button>
          </div>
        </div>

        {/* Footer */}
        <footer className="w-full py-6 bg-zinc-50 dark:bg-zinc-800/50 border-t border-zinc-100 dark:border-zinc-800 text-center text-zinc-400 text-sm">
          &copy; 2024 Kim Tae-muk. All rights reserved.
        </footer>
      </main>
    </div>
  );
}
