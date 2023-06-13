import { useState } from "react";
import FooterComponent from "../components/FooterComponent";
import CustomNavbar from "../components/CustomNavbar";

function CheckoutPage() {
  
  const [cardNumber, setCardNumber] = useState("");
  const [cardholder, setCardholder] = useState("");
  const [expired, setExpired] = useState({ month: "", year: "" });
  const [securityCode, setSecurityCode] = useState("");
  const [card, setCard] = useState("front");
  const handleChange = (event) => {
    const value = event.target.value;
    const formattedValue = formatCardNumber(value);
    setCardNumber(formattedValue);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };
  const formatCardNumber = (value) => {
    const input = value.replace(/\D/g, '').substring(0, 16); // Sadece rakamları al ve uzunluğu 16'ya kes
    const blocks = input.match(/.{1,4}/g) || []; // Her dört karakteri bir blok olarak grupla
    return blocks.join(' '); // Boşluklarla ayrılmış blokları birleştir
  };

    return (
        <div>
            <CustomNavbar />
            <div className="flex lg:flex-row md:flex-col sm:flex-col w-full mt-20 justify-around align-items-center">
            
            <div className="ml-16">
      <div className="credit-card w-full sm:w-auto shadow-lg mx-auto rounded-xl bg-white ">
        <header className="flex flex-col justify-center items-center">
          <div
            className="relative"
            style={{ display: card === "front" ? "block" : "none" }}
          >
            <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-front.png"
              alt="front credit card"
            />
            <div className="front bg-transparent text-lg w-full text-white px-12 absolute left-0 bottom-12">
              <p className="number mb-5 sm:text-xl">
                {cardNumber !== "" ? cardNumber : "0000 0000 0000 0000"}
              </p>
              <div className="flex flex-row justify-between">
                <p>{cardholder !== "" ? cardholder : "Kart Sahibi"}</p>
                <div className="">
                  <span>{expired.month}</span>
                  <span>{expired.month !== "" && "/"}</span>
                  <span>{expired.year}</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="relative"
            style={{ display: card === "back" ? "block" : "none" }}
          >
            <img
              className="w-full h-auto"
              src="https://www.computop-paygate.com/Templates/imagesaboutYou_desktop/images/svg-cards/card-visa-back.png"
              alt=""
            />
            <div className="bg-transparent text-white text-xl w-full flex justify-end absolute bottom-20 px-8 sm:bottom-24 right-0 sm:px-12">
              <div className="border border-white w-16 h-9 flex justify-center items-center">
                <p className="text-sm">{securityCode !== "" ? securityCode : "cvv"}</p>
              </div>
            </div>
          </div>

</header>
<form onSubmit={handleSubmit} className="p-8">
<div className="mb-8">
<label htmlFor="card-number" className="block mb-2">
Kart Numarası
</label>
<input
  type="text"
  name="card-number"
  id="card-number"
  value={cardNumber}
  onChange={(event) => {
    setCardNumber(event.target.value);
    handleChange(event);
  }}
  onKeyPress={(event) => {
    if (!/[0-9]/.test(event.key) || cardNumber.length === 20) {
      event.preventDefault();
    }
  }}
  maxLength={20}
  placeholder="____ ____ ____ ____"
  inputMode="numeric" // Sadece sayısal klavye göster
  className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
/>
</div>
<div className="mb-8">
<label htmlFor="cardholder" className="block mb-2">
Kart Sahibi
</label>
<input
type="text"
name="cardholder"
id="cardholder"
value={cardholder}
onChange={(event) => setCardholder(event.target.value)}
className="w-full border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
/>
</div>
<div className="mb-8">
<label htmlFor="expiry-date" className="block mb-2">
Son Kullanma Tarihi
</label>
<div className="flex">
<input
type="text"
name="expiry-month"
id="expiry-month"
maxLength={2}  onKeyPress={(event) => {
  if (!/[0-9]/.test(event.key) || cardNumber.length === 2) {
    event.preventDefault();
  }
}}
placeholder="MM"
value={expired.month}
onChange={(event) =>
setExpired({ ...expired, month: event.target.value })
}
className="w-1/2 mr-2 border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
/>
<input
type="text"
name="expiry-year"
id="expiry-year"
placeholder="YY"
maxLength={2}
onKeyPress={(event) => {
  if (!/[0-9]/.test(event.key) || cardNumber.length === 2) {
    event.preventDefault();
  }
}}
value={expired.year}
onChange={(event) =>
setExpired({ ...expired, year: event.target.value })
}
className="w-1/2 border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
/>
</div>
</div>
<div className="mb-8">
<label htmlFor="security-code" className="block mb-2">
CVV
</label>
<input
type="text"
name="security-code"
id="security-code"
value={securityCode}
onFocus={() => setCard("back")}
onBlur={() => setCard("front")}
onKeyPress={(event) => {
  if (!/[0-9]/.test(event.key) || cardNumber.length === 3) {
    event.preventDefault();
  }
}}
maxLength={3}
onChange={(event) => setSecurityCode(event.target.value)}
className="w-1/3 border-2 border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
/>
</div>
<div className="flex justify-between">

</div>

<div className="flex justify-end">
  <button
    type="submit"
    className="bg-sky-400 hover:bg-sky-500 text-white mx-auto px-20 py-2 rounded-lg"
  >
    Satın al
  </button>
</div>
</form>
      </div>
             </div>
            <div className="w-min p-10 checkout-card">
            <div class="max-w-m mx-auto border rounded-lg md:mx-4 dark:border-gray-300 text-center">
                        <div class="p-6">
                            <h1 class="text-xl font-medium text-gray-700 capitalize lg:text-2xl ">Gelişmiş Plan</h1>

                            <p class="mt-4 text-gray-500 dark:text-gray-600 max-w-s">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum quam voluptatibus
                            </p>

                            <h2 class="mt-4 text-2xl font-semibold text-gray-700 sm:text-3xl dark:text-gray-600">₺000.00 <span class="text-base font-medium">/ Lorem, ipsum.</span></h2>

                            <p class="mt-1 text-gray-500 dark:text-gray-500">
                                Lorem, ipsum dolor.
                            </p>

                        </div>

                        <hr className=" border-gray-200  dark:border-gray-300" />

                        <div class="p-6">


                            <div class="mt-8 space-y-4">
                            <div class="mt-6  rounded-lg bg-white p-6 md:mt-0  ">
        <div class="mb-2 flex justify-between">
          <p class="text-gray-700">Subtotal</p>
          <p class="text-gray-700">$129.99</p>
        </div>
        <div class="flex justify-between">
          <p class="text-gray-700">Shipping</p>
          <p class="text-gray-700">$4.99</p>
        </div>
        <hr class="my-4" />
        <div class="flex justify-between">
          <p class="text-lg font-bold">Total</p>
          <div class="">
            <p class="mb-1 text-lg font-bold">$134.98 USD</p>
            <p class="text-sm text-gray-700">including VAT</p>
          </div>
        </div>
        <button class="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Check out</button>
      </div>
                            </div>
                        </div>
                    </div>
         
            </div>
            </div>
        

            <FooterComponent />
      </div>
);
}
          


export default CheckoutPage