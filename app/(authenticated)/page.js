import Image from 'next/image'
// import stylesHome from './home.css'
import Header from './../components/Header/Header.js'
import Footer from './../components/Footer/Footer.js'
import './home.css'
export default function Home() {
  return (
    <main>
      <Header/>
      <section className='home'>
                <article>
                    <h2>A <span>Inteligência artificial</span> como
                        catalizadora da eficiência</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate ex, sed fermentum nibh</p>

                    <button>começar agora</button>
                </article>
            </section>

            <article className='servico' id='servico'>

                <section className='titulo-servicos'>
                    <h2>Serviços que automatizam todo o processo</h2>
                </section>
                <section className='paragrafo-servicos'>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate ex, sed fermentum nibh</p>

                </section>


            </article>
            <article className='card-servicos' >
                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="24" viewBox="0 0 35 24" fill="none">
                        <path d="M34.5878 11.0942C34.5372 10.98 33.313 8.2643 30.5915 5.54277C26.9652 1.91648 22.385 0 17.3437 0C12.3025 0 7.72229 1.91648 4.096 5.54277C1.37448 8.2643 0.144517 10.9844 0.0997127 11.0942C0.03397 11.2421 0 11.4021 0 11.5639C0 11.7258 0.03397 11.8858 0.0997127 12.0337C0.150299 12.1479 1.37448 14.8621 4.096 17.5837C7.72229 21.2085 12.3025 23.125 17.3437 23.125C22.385 23.125 26.9652 21.2085 30.5915 17.5837C33.313 14.8621 34.5372 12.1479 34.5878 12.0337C34.6535 11.8858 34.6875 11.7258 34.6875 11.5639C34.6875 11.4021 34.6535 11.2421 34.5878 11.0942ZM17.3437 20.8125C12.8951 20.8125 9.00862 19.1952 5.79135 16.0068C4.47127 14.694 3.34818 13.1971 2.45702 11.5625C3.34794 9.92776 4.47106 8.43076 5.79135 7.11816C9.00862 3.9298 12.8951 2.3125 17.3437 2.3125C21.7924 2.3125 25.6789 3.9298 28.8961 7.11816C30.2188 8.43045 31.3443 9.92744 32.2377 11.5625C31.1956 13.5079 26.6559 20.8125 17.3437 20.8125ZM17.3437 4.625C15.9716 4.625 14.6303 5.03188 13.4895 5.79418C12.3486 6.55648 11.4594 7.63997 10.9343 8.90763C10.4092 10.1753 10.2719 11.5702 10.5395 12.9159C10.8072 14.2617 11.468 15.4978 12.4382 16.4681C13.4084 17.4383 14.6446 18.099 15.9903 18.3667C17.336 18.6344 18.7309 18.497 19.9986 17.9719C21.2663 17.4468 22.3498 16.5576 23.1121 15.4168C23.8744 14.2759 24.2812 12.9346 24.2812 11.5625C24.2793 9.72315 23.5478 7.95968 22.2472 6.65906C20.9466 5.35844 19.1831 4.62691 17.3437 4.625ZM17.3437 16.1875C16.429 16.1875 15.5348 15.9162 14.7742 15.408C14.0136 14.8998 13.4208 14.1775 13.0708 13.3324C12.7207 12.4873 12.6291 11.5574 12.8076 10.6602C12.9861 9.76305 13.4265 8.93895 14.0734 8.29213C14.7202 7.64531 15.5443 7.20482 16.4414 7.02637C17.3386 6.84791 18.2685 6.9395 19.1136 7.28956C19.9588 7.63961 20.6811 8.23241 21.1893 8.99299C21.6975 9.75357 21.9687 10.6478 21.9687 11.5625C21.9687 12.7891 21.4815 13.9655 20.6141 14.8329C19.7467 15.7002 18.5704 16.1875 17.3437 16.1875Z" fill="white" />
                    </svg>

                    <h3>Visão computacional</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate ex.</p>
                </section>

                <section>
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="30" viewBox="0 0 29 30" fill="none">
                        <path d="M24.5385 5.55556H15.6154V1.11111C15.6154 0.816426 15.4979 0.533811 15.2887 0.325437C15.0795 0.117063 14.7958 0 14.5 0C14.2042 0 13.9205 0.117063 13.7113 0.325437C13.5021 0.533811 13.3846 0.816426 13.3846 1.11111V5.55556H4.46154C3.27826 5.55556 2.14345 6.02381 1.30675 6.8573C0.470053 7.6908 0 8.82126 0 10V25.5556C0 26.7343 0.470053 27.8648 1.30675 28.6983C2.14345 29.5317 3.27826 30 4.46154 30H24.5385C25.7217 30 26.8565 29.5317 27.6932 28.6983C28.5299 27.8648 29 26.7343 29 25.5556V10C29 8.82126 28.5299 7.6908 27.6932 6.8573C26.8565 6.02381 25.7217 5.55556 24.5385 5.55556ZM26.7692 25.5556C26.7692 26.1449 26.5342 26.7102 26.1159 27.1269C25.6975 27.5437 25.1301 27.7778 24.5385 27.7778H4.46154C3.8699 27.7778 3.3025 27.5437 2.88415 27.1269C2.4658 26.7102 2.23077 26.1449 2.23077 25.5556V10C2.23077 9.41063 2.4658 8.8454 2.88415 8.42865C3.3025 8.0119 3.8699 7.77778 4.46154 7.77778H24.5385C25.1301 7.77778 25.6975 8.0119 26.1159 8.42865C26.5342 8.8454 26.7692 9.41063 26.7692 10V25.5556ZM19.5192 17.7778H9.48077C8.44541 17.7778 7.45245 18.1875 6.72033 18.9168C5.98822 19.6461 5.57692 20.6353 5.57692 21.6667C5.57692 22.6981 5.98822 23.6872 6.72033 24.4165C7.45245 25.1458 8.44541 25.5556 9.48077 25.5556H19.5192C20.5546 25.5556 21.5476 25.1458 22.2797 24.4165C23.0118 23.6872 23.4231 22.6981 23.4231 21.6667C23.4231 20.6353 23.0118 19.6461 22.2797 18.9168C21.5476 18.1875 20.5546 17.7778 19.5192 17.7778ZM15.6154 20V23.3333H13.3846V20H15.6154ZM7.80769 21.6667C7.80769 21.2246 7.98396 20.8007 8.29772 20.4882C8.61149 20.1756 9.03704 20 9.48077 20H11.1538V23.3333H9.48077C9.03704 23.3333 8.61149 23.1577 8.29772 22.8452C7.98396 22.5326 7.80769 22.1087 7.80769 21.6667ZM19.5192 23.3333H17.8462V20H19.5192C19.963 20 20.3885 20.1756 20.7023 20.4882C21.016 20.8007 21.1923 21.2246 21.1923 21.6667C21.1923 22.1087 21.016 22.5326 20.7023 22.8452C20.3885 23.1577 19.963 23.3333 19.5192 23.3333ZM6.69231 13.8889C6.69231 13.5593 6.79043 13.237 6.97427 12.9629C7.15811 12.6889 7.41941 12.4752 7.72513 12.3491C8.03084 12.2229 8.36724 12.1899 8.69179 12.2542C9.01633 12.3186 9.31444 12.4773 9.54843 12.7104C9.78241 12.9435 9.94176 13.2404 10.0063 13.5637C10.0709 13.887 10.0377 14.2222 9.91111 14.5267C9.78447 14.8312 9.57003 15.0915 9.2949 15.2747C9.01976 15.4578 8.69629 15.5556 8.36538 15.5556C7.92166 15.5556 7.4961 15.38 7.18234 15.0674C6.86858 14.7548 6.69231 14.3309 6.69231 13.8889ZM18.9615 13.8889C18.9615 13.5593 19.0597 13.237 19.2435 12.9629C19.4273 12.6889 19.6886 12.4752 19.9944 12.3491C20.3001 12.2229 20.6365 12.1899 20.961 12.2542C21.2856 12.3186 21.5837 12.4773 21.8177 12.7104C22.0516 12.9435 22.211 13.2404 22.2755 13.5637C22.3401 13.887 22.307 14.2222 22.1803 14.5267C22.0537 14.8312 21.8393 15.0915 21.5641 15.2747C21.289 15.4578 20.9655 15.5556 20.6346 15.5556C20.1909 15.5556 19.7653 15.38 19.4516 15.0674C19.1378 14.7548 18.9615 14.3309 18.9615 13.8889Z" fill="white" />
                    </svg>

                    <h3>Atendimento automático</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate ex.</p>
                </section>

                <section>

                    <svg xmlns="http://www.w3.org/2000/svg" width="34" height="22" viewBox="0 0 34 22" fill="none">
                        <path d="M34 1.22218V10.9997C34 11.3238 33.8721 11.6347 33.6444 11.8639C33.4166 12.0931 33.1078 12.2218 32.7857 12.2218C32.4637 12.2218 32.1548 12.0931 31.9271 11.8639C31.6994 11.6347 31.5715 11.3238 31.5715 10.9997V4.17223L19.0737 16.7531C18.9609 16.8667 18.827 16.9569 18.6796 17.0184C18.5322 17.0799 18.3742 17.1115 18.2146 17.1115C18.055 17.1115 17.897 17.0799 17.7496 17.0184C17.6022 16.9569 17.4683 16.8667 17.3555 16.7531L12.1433 11.5053L2.07403 21.6418C1.84618 21.8712 1.53716 22 1.21494 22C0.892716 22 0.583692 21.8712 0.355847 21.6418C0.128002 21.4125 0 21.1015 0 20.7771C0 20.4528 0.128002 20.1418 0.355847 19.9124L11.2842 8.91278C11.397 8.79914 11.5309 8.709 11.6783 8.64749C11.8257 8.58599 11.9837 8.55433 12.1433 8.55433C12.3029 8.55433 12.4609 8.58599 12.6083 8.64749C12.7557 8.709 12.8896 8.79914 13.0024 8.91278L18.2146 14.1605L29.8548 2.44437H23.0716C22.7496 2.44437 22.4408 2.3156 22.213 2.0864C21.9853 1.8572 21.8574 1.54633 21.8574 1.22218C21.8574 0.898041 21.9853 0.587174 22.213 0.35797C22.4408 0.128766 22.7496 0 23.0716 0H32.7857C33.1078 0 33.4166 0.128766 33.6444 0.35797C33.8721 0.587174 34 0.898041 34 1.22218Z" fill="white" />
                    </svg>



                    <h3>Operação eficiente</h3>
                    <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at vulputate ex.</p>

                </section>
            </article>
            <article className='titulo-funcionalidade' id='processo'>
                <h2>Como o <span>GuinchApp</span> funciona?</h2>
            </article>
            <article className='descricao-funcionalidade'>
                <section>
                    <div className='img-descricao'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="64" height="60" viewBox="0 0 64 60" fill="none">
                            <path d="M59.0769 0H4.92316C3.61748 0 2.36527 0.526784 1.44202 1.46447C0.518765 2.40215 8.57209e-05 3.67392 8.57209e-05 5V55C-0.00547689 55.953 0.259797 56.8875 0.764086 57.6912C1.26837 58.4949 1.99026 59.1338 2.84316 59.5312C3.4949 59.8386 4.20459 59.9985 4.92316 60C6.07886 59.9972 7.19622 59.5787 8.077 58.8187C8.09168 58.809 8.10511 58.7975 8.117 58.7844L18.0001 50H59.0769C60.3826 50 61.6348 49.4732 62.5581 48.5355C63.4813 47.5979 64 46.3261 64 45V5C64 3.67392 63.4813 2.40215 62.5581 1.46447C61.6348 0.526784 60.3826 0 59.0769 0ZM59.0769 45H18.0001C16.8407 44.9995 15.7184 45.4144 14.8308 46.1719L14.7939 46.2062L4.92316 55V5H59.0769V45ZM28.3077 25C28.3077 24.2583 28.5243 23.5333 28.93 22.9166C29.3357 22.2999 29.9124 21.8193 30.5871 21.5355C31.2617 21.2516 32.0041 21.1774 32.7204 21.3221C33.4366 21.4667 34.0945 21.8239 34.6109 22.3483C35.1273 22.8728 35.4789 23.541 35.6214 24.2684C35.7639 24.9958 35.6907 25.7498 35.4113 26.4351C35.1318 27.1203 34.6586 27.706 34.0514 28.118C33.4442 28.5301 32.7303 28.75 32 28.75C31.0208 28.75 30.0816 28.3549 29.3892 27.6516C28.6968 26.9484 28.3077 25.9946 28.3077 25ZM14.7693 25C14.7693 24.2583 14.9858 23.5333 15.3916 22.9166C15.7973 22.2999 16.3739 21.8193 17.0486 21.5355C17.7233 21.2516 18.4657 21.1774 19.1819 21.3221C19.8982 21.4667 20.5561 21.8239 21.0725 22.3483C21.5888 22.8728 21.9405 23.541 22.083 24.2684C22.2254 24.9958 22.1523 25.7498 21.8728 26.4351C21.5934 27.1203 21.1201 27.706 20.5129 28.118C19.9057 28.5301 19.1919 28.75 18.4616 28.75C17.4823 28.75 16.5432 28.3549 15.8507 27.6516C15.1583 26.9484 14.7693 25.9946 14.7693 25ZM41.8462 25C41.8462 24.2583 42.0627 23.5333 42.4684 22.9166C42.8742 22.2999 43.4508 21.8193 44.1255 21.5355C44.8002 21.2516 45.5426 21.1774 46.2588 21.3221C46.9751 21.4667 47.633 21.8239 48.1493 22.3483C48.6657 22.8728 49.0174 23.541 49.1598 24.2684C49.3023 24.9958 49.2292 25.7498 48.9497 26.4351C48.6703 27.1203 48.197 27.706 47.5898 28.118C46.9826 28.5301 46.2688 28.75 45.5385 28.75C44.5592 28.75 43.6201 28.3549 42.9276 27.6516C42.2352 26.9484 41.8462 25.9946 41.8462 25Z" fill="#1B5BFF" />
                        </svg>
                    </div>
                    <div className='conteudo-funcionalidade'>
                        <h3>Triagem feita pelo Chatbot</h3>
                        <p>O ChatBot identificará o problema do usuário e a necessidade do envio de um guincho ao local.</p>
                    </div>
                </section>
                <section>
                    <div className='img-descricao'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="51" viewBox="0 0 60 51" fill="none">
                            <path d="M58.8723 15.1318L31.0152 0.253652C30.7031 0.0871511 30.3543 0 30 0C29.6457 0 29.2969 0.0871511 28.9848 0.253652L1.12768 15.1318C0.788603 15.3127 0.504935 15.5809 0.306497 15.9082C0.108059 16.2354 0.00218268 16.6097 3.73755e-07 16.9916V33.9952C-0.000228333 34.3793 0.104509 34.7563 0.303074 35.0861C0.501639 35.4159 0.786608 35.6862 1.12768 35.8682L28.9848 50.7463C29.2969 50.9128 29.6457 51 30 51C30.3543 51 30.7031 50.9128 31.0152 50.7463L58.8723 35.8682C59.2134 35.6862 59.4984 35.4159 59.6969 35.0861C59.8955 34.7563 60.0002 34.3793 60 33.9952V16.9916C59.9978 16.6097 59.8919 16.2354 59.6935 15.9082C59.4951 15.5809 59.2114 15.3127 58.8723 15.1318ZM55.7143 30.4377L46.4598 25.4934L55.7143 20.549V30.4377ZM41.9384 23.0783L32.1429 17.8471V5.67089L53.3384 16.9916L41.9384 23.0783ZM30 29.4547L22.5804 25.4934L30 21.5321L37.4196 25.4934L30 29.4547ZM27.8571 5.67089V17.8471L18.0616 23.0783L6.66161 16.9916L27.8571 5.67089ZM4.28571 20.549L13.5402 25.4934L4.28571 30.4377V20.549ZM18.0616 27.9084L27.8571 33.1397V45.3158L6.66161 33.9952L18.0616 27.9084ZM32.1429 45.3158V33.1397L41.9384 27.9084L53.3384 33.9952L32.1429 45.3158Z" fill="#1B5BFF" />
                        </svg>
                    </div>
                    <div className='conteudo-funcionalidade'>
                        <h3>Triagem feita pelo Chatbot</h3>
                        <p>O ChatBot identificará o problema do usuário e a necessidade do envio de um guincho ao local.</p>
                    </div>
                </section>
                <section>
                    <div className='img-descricao'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="63" height="45" viewBox="0 0 63 45" fill="none">
                            <path d="M62.8477 16.3332L59.1727 6.96169C58.861 6.16878 58.323 5.48964 57.6284 5.01223C56.9339 4.53483 56.1148 4.28117 55.2772 4.28411H46.2V2.14206C46.2 1.57395 45.9787 1.02911 45.5849 0.627394C45.1911 0.225681 44.6569 0 44.1 0H4.2C3.08609 0 2.0178 0.451361 1.23015 1.25479C0.442499 2.05822 0 3.1479 0 4.28411V34.2729C0 35.4091 0.442499 36.4988 1.23015 37.3022C2.0178 38.1057 3.08609 38.557 4.2 38.557H8.6625C9.12513 40.4001 10.176 42.0337 11.6494 43.2002C13.1227 44.3668 14.9348 45 16.8 45C18.6652 45 20.4773 44.3668 21.9506 43.2002C23.424 42.0337 24.4749 40.4001 24.9375 38.557H38.0625C38.5251 40.4001 39.576 42.0337 41.0493 43.2002C42.5227 44.3668 44.3348 45 46.2 45C48.0652 45 49.8773 44.3668 51.3506 43.2002C52.824 42.0337 53.8749 40.4001 54.3375 38.557H58.8C59.9139 38.557 60.9822 38.1057 61.7698 37.3022C62.5575 36.4988 63 35.4091 63 34.2729V17.1365C63.0007 16.8612 62.949 16.5884 62.8477 16.3332ZM46.2 8.56823H55.2772L57.7972 14.9944H46.2V8.56823ZM4.2 4.28411H42V21.4206H4.2V4.28411ZM16.8 40.6991C15.9693 40.6991 15.1573 40.4478 14.4666 39.9771C13.7759 39.5063 13.2376 38.8373 12.9197 38.0544C12.6018 37.2716 12.5186 36.4102 12.6807 35.5792C12.8428 34.7481 13.2428 33.9848 13.8301 33.3856C14.4175 32.7865 15.1659 32.3785 15.9806 32.2132C16.7953 32.0479 17.6398 32.1327 18.4073 32.457C19.1747 32.7812 19.8307 33.3303 20.2922 34.0348C20.7537 34.7394 21 35.5677 21 36.415C21 37.5512 20.5575 38.6409 19.7698 39.4443C18.9822 40.2477 17.9139 40.6991 16.8 40.6991ZM38.0625 34.2729H24.9375C24.4749 32.4299 23.424 30.7963 21.9506 29.6297C20.4773 28.4631 18.6652 27.8299 16.8 27.8299C14.9348 27.8299 13.1227 28.4631 11.6494 29.6297C10.176 30.7963 9.12513 32.4299 8.6625 34.2729H4.2V25.7047H42V29.0008C41.0343 29.5701 40.1891 30.3293 39.5132 31.2343C38.8373 32.1393 38.3442 33.1721 38.0625 34.2729ZM46.2 40.6991C45.3693 40.6991 44.5573 40.4478 43.8666 39.9771C43.1759 39.5063 42.6376 38.8373 42.3197 38.0544C42.0018 37.2716 41.9186 36.4102 42.0807 35.5792C42.2428 34.7481 42.6428 33.9848 43.2301 33.3856C43.8175 32.7865 44.5659 32.3785 45.3806 32.2132C46.1953 32.0479 47.0398 32.1327 47.8073 32.457C48.5747 32.7812 49.2307 33.3303 49.6922 34.0348C50.1537 34.7394 50.4 35.5677 50.4 36.415C50.4 37.5512 49.9575 38.6409 49.1698 39.4443C48.3822 40.2477 47.3139 40.6991 46.2 40.6991ZM58.8 34.2729H54.3375C53.8693 32.4343 52.8165 30.8061 51.3439 29.6432C49.8714 28.4804 48.0623 27.8485 46.2 27.8467V19.2785H58.8V34.2729Z" fill="#1B5BFF" />
                        </svg>
                    </div>

                    <div className='conteudo-funcionalidade'>
                        <h3>Triagem feita pelo Chatbot</h3>
                        <p>O ChatBot identificará o problema do usuário e a necessidade do envio de um guincho ao local.</p>
                    </div>
                </section>
                <section>
                    <div className='img-descricao'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="59" height="45" viewBox="0 0 59 45" fill="none">
                            <path d="M52.8965 8.18182H48.8276V6.13636C48.8276 4.5089 48.1845 2.94809 47.0399 1.7973C45.8953 0.646508 44.3429 0 42.7241 0H6.10345C4.48471 0 2.93228 0.646508 1.78766 1.7973C0.64304 2.94809 0 4.5089 0 6.13636V30.6818C0 32.3093 0.64304 33.8701 1.78766 35.0209C2.93228 36.1717 4.48471 36.8182 6.10345 36.8182H34.5862V38.8636C34.5862 40.4911 35.2292 42.0519 36.3739 43.2027C37.5185 44.3535 39.0709 45 40.6897 45H52.8965C54.5153 45 56.0677 44.3535 57.2123 43.2027C58.357 42.0519 59 40.4911 59 38.8636V14.3182C59 12.6907 58.357 11.1299 57.2123 9.97912C56.0677 8.82833 54.5153 8.18182 52.8965 8.18182ZM6.10345 32.7273C5.56387 32.7273 5.04639 32.5118 4.66485 32.1282C4.28331 31.7446 4.06897 31.2243 4.06897 30.6818V6.13636C4.06897 5.59388 4.28331 5.07361 4.66485 4.69001C5.04639 4.30641 5.56387 4.09091 6.10345 4.09091H42.7241C43.2637 4.09091 43.7812 4.30641 44.1627 4.69001C44.5443 5.07361 44.7586 5.59388 44.7586 6.13636V8.18182H40.6897C39.0709 8.18182 37.5185 8.82833 36.3739 9.97912C35.2292 11.1299 34.5862 12.6907 34.5862 14.3182V32.7273H6.10345ZM54.931 38.8636C54.931 39.4061 54.7167 39.9264 54.3351 40.31C53.9536 40.6936 53.4361 40.9091 52.8965 40.9091H40.6897C40.1501 40.9091 39.6326 40.6936 39.2511 40.31C38.8695 39.9264 38.6552 39.4061 38.6552 38.8636V14.3182C38.6552 13.7757 38.8695 13.2554 39.2511 12.8718C39.6326 12.4882 40.1501 12.2727 40.6897 12.2727H52.8965C53.4361 12.2727 53.9536 12.4882 54.3351 12.8718C54.7167 13.2554 54.931 13.7757 54.931 14.3182V38.8636ZM30.5172 42.9545C30.5172 43.497 30.3029 44.0173 29.9214 44.4009C29.5398 44.7845 29.0223 45 28.4828 45H18.3103C17.7708 45 17.2533 44.7845 16.8717 44.4009C16.4902 44.0173 16.2759 43.497 16.2759 42.9545C16.2759 42.4121 16.4902 41.8918 16.8717 41.5082C17.2533 41.1246 17.7708 40.9091 18.3103 40.9091H28.4828C29.0223 40.9091 29.5398 41.1246 29.9214 41.5082C30.3029 41.8918 30.5172 42.4121 30.5172 42.9545ZM50.8621 18.4091C50.8621 18.9516 50.6477 19.4718 50.2662 19.8554C49.8846 20.239 49.3672 20.4545 48.8276 20.4545H44.7586C44.219 20.4545 43.7016 20.239 43.32 19.8554C42.9385 19.4718 42.7241 18.9516 42.7241 18.4091C42.7241 17.8666 42.9385 17.3463 43.32 16.9627C43.7016 16.5791 44.219 16.3636 44.7586 16.3636H48.8276C49.3672 16.3636 49.8846 16.5791 50.2662 16.9627C50.6477 17.3463 50.8621 17.8666 50.8621 18.4091Z" fill="#1B5BFF" />
                        </svg>
                    </div>
                    <div className='conteudo-funcionalidade'>

                        <h3>Triagem feita pelo Chatbot</h3>
                        <p>O ChatBot identificará o problema do usuário e a necessidade do envio de um guincho ao local.</p>
                    </div>
                </section>
            </article>
            <article className='contato-home' id='contato'>
                <form action="" method="post">
                    <h2>
                        Deixe seu contato!
                    </h2>
                    <p>
                        Entraremos em contato e iremos analisar a melhor maneira de implementar o GuinchApp na sua empresa!
                    </p>
                    <input type="text" placeholder='Nome' /> <br />
                    <input type="email" placeholder='E-mail' /> <br />
                    <button>Enviar <span><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                        <path d="M14.6905 0.313567C14.5558 0.178925 14.3875 0.0826333 14.2032 0.034611C14.0188 -0.0134113 13.825 -0.0114281 13.6416 0.0403561H13.6316L0.775483 3.94031C0.566209 4.00048 0.380235 4.12296 0.242324 4.29143C0.104413 4.45991 0.0211098 4.66639 0.00350769 4.88338C-0.0140944 5.10037 0.0348396 5.31758 0.143794 5.50607C0.252747 5.69456 0.416551 5.8454 0.613392 5.9385L6.3482 8.65387L9.06423 14.3873C9.14998 14.5709 9.28648 14.7261 9.45761 14.8347C9.62875 14.9433 9.82739 15.0006 10.0301 15C10.0609 15 10.0917 14.9987 10.1225 14.996C10.3388 14.9785 10.5445 14.8952 10.7121 14.7575C10.8798 14.6197 11.0012 14.434 11.0602 14.2252L14.9584 1.37226C14.9584 1.36891 14.9584 1.36556 14.9584 1.36222C15.0109 1.17938 15.0137 0.985877 14.9667 0.801583C14.9196 0.617289 14.8243 0.448849 14.6905 0.313567ZM10.0361 13.9185L10.0328 13.9279L7.39643 8.36392L10.5606 5.19989C10.6568 5.09861 10.7097 4.96374 10.7079 4.82405C10.7061 4.68436 10.6498 4.55089 10.551 4.45211C10.4522 4.35332 10.3187 4.29704 10.1789 4.29525C10.0392 4.29346 9.90432 4.34631 9.80301 4.44253L6.63822 7.60589L1.0722 4.97021H1.08158L13.9323 1.07159L10.0361 13.9185Z" fill="white" />
                    </svg></span> </button>
                </form>
            </article>
      <Footer/>
    </main>
  )
}
