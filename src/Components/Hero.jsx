import React from "react";
import "../index.css";
import { SlArrowRightCircle } from "react-icons/sl";
import TextCards from "./pages/TextCards";
import ImageText from "./pages/ImageText";
import ImageText2 from "./pages/ImageText2";
import { FaCheckCircle } from "react-icons/fa";
import { FaQuoteLeft } from "react-icons/fa";
import Card from "./pages/Card";

function Hero() {
  const table = [
    "Accept payments in 200 markets and 130 currencies",
    "Make payouts in 200 markets",
    "Acquiring in 47 markets",
    "Wide range of payment methods",
    "Recurring billing capabilities",
    "Network tokenization",
    "Batch and real-time account updater",
    "Advanced predictive risk solutions",
    "PCI-compliant vault",
    "Chargeback Protection",
    "Dispute automation",
    "IC++ pricing available",
    "White glove onboarding & support",
    "Flexible, scalable integration",
    "24/7 monitoring & optimization",
    "Global support center",
  ];

  return (
    <div>
      <div className="flex  flex-col h-[90vh] items-center justify-center relative">
        <h1 className="changeFont  sm:mt-[40px] mt-[60px] font-medium text-[34px] sm:text-5xl text-gray-900 text-center lg:text-left">
          Global Payment <br /> processing solutions
        </h1>
        <p className="font-medium mt-[20px] sm:text-left text-center text-gray-800 sm:text-[18px] ">
          Grow and optimize your business with a flexible, end-to-end payments
          platform <br /> powered by Braintree technology
        </p>
        <button
          type="button"
          className="text-white mt-[14px] bg-[#101e3f] font-thin hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full px-[25px] py-[8px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Connect with a Payment Expert
        </button>
        <div className="flex mt-[40px] sm:ml-[10rem]">
          <img
            className="w-[500px] md:flex hidden h-[350px] z-10"
            src="https://static.wixstatic.com/media/11062b_788c5195cc684353a888acbb2fed872d~mv2.jpeg/v1/crop/x_2297,y_0,w_6303,h_5733/fill/w_220,h_200,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Meeting.jpeg"
            alt=""
          />
          <img
            className="w-80 h-[350px] md:flex hidden z-20 -ml-[14rem] rounded-3xl"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRz-U-qQ9k7sZjFmF092Ki5DyPBwO77yPiMRA&usqp=CAU"
            alt=""
          />
          <div className="shadow-2xl gap-5 rounded-3xl sm:right-[6rem] pb-[25px] sm:pb-[16px]   z-[100] bg-white w-80 flex items-center flex-col justify-center relative">
            <img
              className="w-56 h-[190px] rounded-3xl"
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ8NDQ8PDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBolGxUVITMhJSkrLy4wFx8zODMsOCgtLisBCgoKDQ0NFQ8NFSsZFRkrKy0tLSsrKysrLS03Ky0tLSsrLS0tKys3NystLTc3LS03Ny0rNys3LS0tNy0rLS0rK//AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEBAQADAQEBAAAAAAAAAAACAQADBAcGBQj/xABDEAACAQICBAcOAwcFAQAAAAAAAQIDEQQhBRIxQQYHE1FhgZEWIjJCU1RxkpShsdHS8BQXUiMkM2KiwfFDcpOywhX/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAHREBAQEBAAIDAQAAAAAAAAAAAAEREgJRIUFhMf/aAAwDAQACEQMRAD8A+BhE54RJCJzRRploxLYVjBRsSwyAGxLCJYAtBaORhIA0FobIwrjaC0cjQGQBoLRyMDADC0NhZFBojQ2FgBoLGwsAMgmEgjCIjKohYmRhAYGcjAwONo45I5WCSAFjCMEfXRiciRIodjaJYxTAEgjAEjEQAsLGwsAsLQ2FkUGFiYWAWBjYWQBhY2FgBhY2FkUGFjYWAGRiYWAWRiYQIFiCwCwMbAwCwSGwsCGKYD7FIpim2UNYqMATFMEGxGIgUWFjYWAWBjCyKDCxsLADCxsDIAwsbCwoMLGwsgDCxMLALCxMLIqMLEwsCBYmFlQWBjYGFFhYmFhGKYwH2RTGOjLEKYCGMYCEZSMgLCxsLALCxMLCgwsbAyAsLEwsgDCxMLALCxMLIoMLEwsAsLEwsiiyMrIBAsrIygsDGwMILCxMLApiFA+zMYx0ZYxjMDEZiAYjMQgzCyhYEYWVhYUWFiYGQRgYmFkBYGJhYVGBiYWQFhYmBgFkZWFkVCMrCyiBYmFhBYWJgYBYRMIFKQoH2ZjEudGVMYwEIYjAzCVkYEZGYjICwsTAwqMDEwsgLCzmoUZ1ZKFOMpzlsjBOUmfQYPgtZa+Jlna/I0mrrolLYurtIPlmLkZ5WhN3yVoSd/Qfcw0dGlbkqUKb51HWqdcndilh53zk+tsmq+BnTktsZL0xaOJn3WIwKas7+93PxsdoVWbgknbxcr+lAfOMLOavScHZ/b5jhYBYWVkZFFkKyMAkZWFlEYGNgYQWErCAjGMB9myCZDoyxmYxRCGIQZhZWFgZhZWFkEYWVhYUWfq8H9AVsfNqHeUYNcrWku9h/KueXQHg/oarpDERoU+9VnOrUavGlSW2T+CXOz2LR+jqWHpQoUYKNKmu9jtbe+Um9rbIPwtG6FpYaHJ0Iat/CqOzq1N95S5uhHNLCJbutK5+61FtqNm1q63QmvvtOliINZXTeV5W2+jtYxNfhVqcY62asn32d7N5582TXadR03zZ7d2t12y3e4/QnVhPX1Zxq6lSVOeqrqMr+BJJuzSdjqYmaWcr7Ur2v6Ni6SVXScHdqzvZS/lta1k+r3nRrSadmrKyzunFtu1kfoYumnBxba1oyWTs1ferb0dCq7ZPOy353ta2ZB+PpPRyra2p4bo1ZpJX1p0oSq++EKi9LR8oz1LgdRVbSeHja8YyqymnscOQn7u+SPN9LYP8Nia+Gz/d69agr7WoTcU+tJMK6TCxMLCowsrIwIwsrIwCwMbAwgsImEBGIUD7O5gmudGSIS5iiGMS5BgspACyMrCyCMLEz9jg3oarXxuEhUpVFRrYimnOVOSpzik5uKk1Z3jFhXpnAfQP4HBQ1o2xGK1a1d276EWrwpvmsvez6CaSvfJLNu62bzsW76TeTvsva3MiTV7NbOjYwy/Pmr775K1t0fTvOpVova27ZWVlZWe3YfrSpu2eee7I/Pxb1U22rJOTbyskUfhVYq82oaknN6/epa8llrXW26SzPza0u3bvf+T9bFu6y8GaykrWirZPafiaQxEKazf+fQZrUdbFN6udtZLbbLsPycSk5xlrNajbsm0m2rZpbdu862O0rVcrxtGHNtb+RtG13iKlOjSjerUkoKHO9it985jVx97xW4Kcq2IxU1aFNchSlfwnLVlLstFdZ55xpYVUtN4xLZUdGsuhzowcv6rvrPeNA6OhgMJCgnfUi5VJfqm++k+3+x4dxtRqPTOJnKnONP8AYU6VSUZKFRRoQ1nGTyed11GvpJ/XxbCxMDI0jCxMLCIFiCFRgY2BhBYRMIFKQwH2NzEIdWVua5DAY1yXIBbkbIQgzYWZkZBmelcH4U6mFoThOrTkoqaUK1WMYVUnFtJSy8ZdZ5m2fd8BauthZQf+nVlG1/FklJe9yBX1FWtUjFyVevfpr1Hn1s68MbjHZPEzz55RfXmjrYqo76kXkttmr3NRpTbVlJ7Wn3rs2ZtWP0KVfFvJ4qVrPLVov/yPVrNWniJy23tGhf8A6fdzjoYepbZLJ2zsus7Koz5r7dkbk2jkp4HDzppSr1IvY4rk4+7UOF8EsBUbc5VZcz5Tb05JW3nYp4aTb6d1jv0aSVs79Td16bl0fl0+A+iW7Spym8nnUqJJZ22WP0tGcEtG4Soq1ClydRJpT5SpJpPbtZ36cub4HMmPgdmjSi75ye7w5fM8l49a9KEsJhacYqb5XFVpeP8Aohfe7/tOw9aw0s9v3c/n/jbx6xGmsRbNYeFHCp8+rHWl2SqTXUUfGMhWEyqMjKwsCMhWFgRhYmFgBkKyAUpDAeq9xeJ8pR/r+Re4nE+Vpf1/I9BUC6h2xz158uBGI8rS7J/IvcPiPLUuyfyPQdU2qXDa8+7hsR5al2TL3C4jy1L1Zn39jXGJtfAdwdfy9L1Zm7gq/l6XqTPvtdBdZDDa+D7gK/nFP1JG/L+v5xT9SR908VFAeOgt6JhtfD/l9X84p+pI/U0FwZr4B1ZurCpCcEpQjGUXrRd1K76HLtPo/wD6FP8AUhLH0uddqGG1+KsTSc2o5u+by279p3qVVLZt9GzpPnNLx/D4hzg70KtnF7VCW+L/ALc538BiVO1murYcbuuj9uMm87tdTVvvI7MZSe17LPxlsd9x06M19t9p247OrpA5aUs7875pZ7jt0pJLNrdnJbd2Z1KUXzbt53aa+7/ADsQd/wDDOaDust/R8zhhH7zOxTiUN1uThOe+MXqp7HLcjxrE8W+Iq1J1amMhKpVnOrUl+HktapKTlJ+FvbZ65iXrZLwV72cHIm5Jnyzb6eSPivq+dw/4JfUT8rqvncPZ5fUet8iTkS8xOq8jfFdV87h7PL6iPiuq+dw9nf1nrnIG5Ecw6ryL8rqvncfZ39Yfyvq+dx9nf1nrrokdAcw6ryJ8V9XzuPs7+sD4r63ncfZ39Z69yHQR0OgvPj6Oq8ffFfV87j7O/rD+WFXzuPs7+s9geHI6A58TqvIPyyq+dR9nf1mPXeQMXnxOqUULVHCJyqAR19UjgztahdQDpODOOUZH6XJk5EamPxqimdDEctu+B9P+HXMF4SL3F0x8Fi6uKWz4H5Vapi3va9CR6fLR0Hu9wHomm/FXYZrUrympVxf65diOpUxOMXjy7EevPQlF+KuwEuD2He2C7DOfq68Zr6RxVnGUpNNWaaTTR1cNputh3dJyXMz2yXBXCvbTXYcVTgVgZ5SpKxL46vTzbR3D7Dx72s3B9KvH3H0uB4baPmrfiKa/3SS+LP3Xxc6Ke3DxZY8Wmht+Epv03M8Guvh+EuBdv3ij68TsrhXoyGUsbh1zLloN9iOxR4utCx2YKg/TBS+J+rg+C+j6P8LC0IW/TSgv7F5NdbR2mcPiP4MpVV+pU5qPa1mfswV0c1HDwhlGKS6EkKUOYsiVwOkgukchDSOJ0ycmcpAji5MnJnMSxRwOmRwOdolgOu4EcDsWJYquu4BcTsOIWgjr6pjlsYDggcsUcNM54gNIqRoiIJYti2KkBLFsWxQIkWxTBWLY1ixQGsVIokiCJDSIkUKqKiIRBSkKBx1Y7+04jtdHOdeSs7FiUDWKYoljWKYA2NYRLAGxLCNYDjYJHJJHHIo4mYrRgjrUzniQwHNEaIYgojGCsIxgMExiCscTGAQkQwUkUxiDIRjAUpjAYFfavQYxSuIhjFRjGMBjMxgIYxgBI45EMVAMYwR//9k="
              alt=""
            />
            <div className="flex justify-between w-72 flex-col">
              <div className="justify-between px-7 flex">
                <div>
                  <h1 className="text-[18px] font-semibold">
                    Speckled bowl set
                  </h1>
                </div>
                <div>
                  <h1>$24.00</h1>
                </div>
              </div>
              <div className="px-7">
                <p>Set of two</p>
              </div>
            </div>
            <button
              type="button"
              className="text-black bg-[#6c7fad] px-[100px] font-medium hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 rounded-full py-[8px] dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
      {/* NEXT page */}
      <div className="flex  h-[100vh]   md:flex-row flex-col justify-center items-center">
        <div className="lg:w-[38vw]   w-[100vw]  gap-[22px] flex items-start flex-col">
          <div>
            <h1 className="sm:text-[140px] sm:w-fit w-[100vw]  pl-[108px]  md:pl-[0] text-[78px] text-blue-950 font-semibold">
              401%
            </h1>
          </div>

          <div className=" md:w-[400px] w-[100vw] text-[18px] text-gray-900 font-semibold md:text-2xl text-center sm:pr-0 lg:text-left">
            ROI for the composite merchant, estimated by Forrester with Paypal
            enterprize payment solutions
          </div>
        </div>
        <div className="w-[45vw] text-center md:text-left sm:border-l-[1px]  h-[58vh] gap-[16px]  items-center  flex flex-col justify-center sm:border-gray-300 ">
          <div className=" w-[400px] flex flex-col gap-4 sm:border-b-[2px] pb-[28px] ">
            <h1 className="text-5xl  text-blue-950 font-semibold">86%</h1>
            <p className="sm:w-[490px] text-gray-900 font-semibold sm:text-xl text-[18px] ">
              of our enterprize users indicate that we had a positive impact on
              authorization rates since adoptation
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h1 className="text-5xl text-blue-950 font-semibold">4 bps</h1>
            <p className="w-[400px] text-gray-900 font-semibold text-xl">
              in the US, Braintree can help reduce chargeback rate by 4 bps
            </p>
          </div>
        </div>
      </div>
      {/* NEXT page */}
      <div className="flex w-[100%] gap-[50px]  sm:h-[50vh]   md:flex-row flex-col items-center md:justify-end 2xl:justify-center ">
        <div className="flex   flex-col gap-5 md:text-left text-center">
          <h1 className="md:px-0 px-8 text-gray-900 font-semibold text-3xl sm:text-4xl ">
            Offer a range of payment <br /> methods worldwide
          </h1>
          <p className="md:px-0 px-8 text-gray-900 sm:font-semibold text-xl ">
            Reach new customers and give them the payment options <br /> they
            prefer so you don't miss a sale
          </p>
          <p className="md:px-0 px-8 text-gray-900 sm:font-semibold text-xl ">
            Accept credit and debit cards, digital wallets, PayPal, and 20+{" "}
            <br /> local payment methods, All in a single integration
          </p>
          <p className="text-blue-800 pl-[80px] cursor-pointer md:pl-[0]  flex items-center gap-3 font-semibold text-xl">
            More about payment methods{" "}
            <SlArrowRightCircle className="transition-transform cursor-pointer transform hover:scale-110 shadow-md" />{" "}
          </p>
        </div>
        <div className="sm:w-[43rem]">
          <img
            src="https://t3.ftcdn.net/jpg/04/86/77/04/360_F_486770467_9nd0TjY0owEdwkoUCvi85VfIJQTvQFKi.jpg"
            alt=""
          />
        </div>
      </div>
      {/* NEXT PAGE */}
      <div className="flex  lg:flex-row flex-col md:gap-0 gap-[40px] mt-6 sm:mt-0   justify-center h-[100vh] lg:h-[50vh] items-center ">
        <TextCards
          title="Enable multiple commerce scenarios"
          content="Web. Mobile. App. In store.
          Get paid in the channels where you sell today and tomorrow.."
        />
        <TextCards
          title="connect millions of  customers"
          content="Connect with our expansive network of shoppers around the world who love to use PayPal, Venmo, and Pay Later."
        />
        <TextCards
          title="Vault customer  payment info"
          content="Help drive conversion and make repeat purchases simple for your customers with our secure data storage."
        />
        <TextCards
          title="Optimize checkout experience"
          content="Control the look and feel of your checkout page with drop-in Ul, hosted fields, and customizable smart payment buttons."
        />
      </div>
      {/* NEXT PAGE */}
      <ImageText
        src="https://media.licdn.com/dms/image/D4D34AQGwyEIFjxJN5A/ugc-proxy-shrink_800/0/1671458431381?e=2147483647&v=beta&t=QPrPshyWY4HoQWhGMCCrqBDao_to6S4VSqfa27qlceU"
        heading="Boost approval rates"
        content="Optimize your backend payments setup with granular, clean messaging and the right payment rails, so you can help boost approval chances and capture more of your hard-earned revenue."
      />
      <div className="  bg-gray-100  w-[100%]  mt-[-50pxpx] flex justify-center pb-9 flex-col items-center lg:pl-0 lg:flex-row  lg:pr-[2.5rem]  ">
        <TextCards
          title="Keep data fresh
         
         
          
      "
          content="  Use Account Updater to securely make batch and real-time updates for Visa, Mastercard, and Discover. "
        />
        <TextCards
          title=" Adopt network tokenization"
          content=" 
        
          Boost security and approvals with a partner who has already tokenized hundreds of millions of credit cards."
        />
        <TextCards
          title="Retry failed transactions
         
         
          
        
       
        "
          content=" We strive to optimize approvals right from the start. But if they fail, we can retry the transaction on alternative acquiring networks."
        />
        <TextCards
          title=" Optimize routing"
          content="Route transactions to global acquirers and networks that will yield the fastest, most reliable, and least expensive transaction."
        />
      </div>
      {/* NEXT PAGE */}
      <ImageText2
        src="https://xtagelabs.com/images/blog_and_case_study/cpg_marketing_mix_implementation_basics.png"
        heading="Orchestration made simple"
        content="Move on from piecemeal management of disparate tools, reporting systems, and processers. Use our flexible tools to manage the entire payment process, help increase resiliency, and reduce operational complexity."
      />
      {/* NEXT PAGE */}
      <ImageText
        src="https://us.norton.com/content/dam/blogs/images/norton/am/img_header_fingers-mouse-card_m.jpg"
        heading="Manage risk and compliance
       "
        content=" We can help you identify and manage potential security. fraud, and compliance risk-so you can focus on what matters most: growing your business."
      />
      <div className="  bg-gray-100  w-[100%] pb-[40px]  flex justify-center flex-col items-center lg:pl-0 lg:flex-row  lg:pr-[2.5rem]  ">
        <TextCards
          title="Right size your fraud solution
      "
          content=" Choose the level of fraud protection you need —from our built-in fraud checks to
        advanced tools. "
          button="About Fraud Protection "
          icon={
            <SlArrowRightCircle className="transition-transform cursor-pointer transform hover:scale-110 shadow-md" />
          }
        />
        <TextCards
          title="Arm yourself against chargebacks"
          content=" 
        
        We can handle fraud analysis, plus cover any eligible chargeback losses and dispute fees."
        />
        <TextCards
          title="Keep up with compliance
        
       
        "
          content="We strive to optimize approvals right from the start. But if they fail, we can retry the transaction on alternative acquiring networks."
        />
        <TextCards
          title=" Let us manage disputes"
          content="Work with one of the most connected fintech providers to help respond to changing risk and compliance guidance.
        Let us manage disputes ."
        />
      </div>
      {/* NEXT PAGE */}
      <div className="bg-[#000130]    h-[90vh] mt-3 relative flex items-center  text-center sm:text-left  sm:px-[120px]">
        <div className=" text-white  absolute flex flex-col pl-[16px] sm:pl-[0] gap-8">
          <h1 className="sm:text-5xl  text-3xl">
            Our modular solution can <br /> grow with you
          </h1>
          <p className=" sm:w-auto  ">
            Turn on the features you want, connect with the <br /> partners in
            your payments ecosystem, and keep <br /> the rest in your back
            pocket for whatever comes next{" "}
          </p>
          <p className="flex  gap-3 pl-[70px] sm:pl-0 items-center cursor-pointer text-blue-500">
            Connect with a payment expert
            <SlArrowRightCircle className="transition-transform transform cursor-pointer hover:scale-110 shadow-md" />
          </p>
        </div>
        <div className="absolute shadow-2xl hidden  bg-white xl:flex flex-col gap-[25px] py-9  items-center w-[35vw] h-[115vh] right-[120px] top-28 ">
          {table.map(function (item) {
            return (
              <li className="w-[500px] list-none  border-b-[2px] border-gray-300  ">
                <span className="flex justify-between">
                  {item} <FaCheckCircle className=" text-green-900" />{" "}
                </span>
              </li>
            );
          })}
        </div>
      </div>
      {/* TABLE FOR SMALL SCREENS */}
      <div className="shadow-2xl pt-14  md:hidden   bg-white flex flex-col gap-[28px]   items-center w-[99vw] h-[120vh] ">
        {table.map(function (item) {
          return (
            <li className="w-[340px] list-none  border-b-[2px] border-gray-300  ">
              <span className="flex justify-between">
                {item} <FaCheckCircle className=" text-green-900" />{" "}
              </span>
            </li>
          );
        })}
      </div>
      {/* NEXT PAGE */}
      {/* SPACE PAGE */}
      <div className="h-[48vh] hidden md:flex"></div>

      <div className="  lg:h-[80vh] w-[100%] py-[50px] lg:py-0 flex justify-center flex-col items-center gap-16  ">
        <div className=" flex lg:flex-row flex-col justify-center gap-8">
          <div className="px-[40px]">
            <img
              className="lg:h-[60vh] lg:w-[38vw] rounded-lg lg:rounded-3xl"
              src="https://m.media-amazon.com/images/I/61a3lAsE3xL._AC_UF894,1000_QL80_.jpg"
              alt=""
            />
            {"  "}
          </div>

          <div className="flex  text-center lg:text-left   lg:w-[43.5vw] flex-col justify-center lg:pl-9 gap-5">
            {" "}
            <h1 className="font-semibold  text-3xl">
              Your partner for innovation
            </h1>
            <p className=" font-normal px-[16px]  sm:px-0 text-[18px]">
              See how Pressed partnered with PayPal to help their development
              team build innovative solutions with limited resources-all powered
              by Braintree technology.
            </p>
            <p className="text-blue-600 pt-[10px] cursor-pointer sm:pl-0 pl-10  items-center gap-3 md:flex hidden">
              Play the video
              <SlArrowRightCircle className="transition-transform cursor-pointer transform hover:scale-110 shadow-md" />
            </p>
          </div>
        </div>{" "}
      </div>
      {/* NEXT PAGE */}
      <div className=" bg-[#000130]  mt-[50px]  h-[70vh]  relative flex items-center  text-center sm:text-left  sm:px-[120px] ">
        <div className="text-white flex flex-col gap-4">
          <FaQuoteLeft className="ml-[14px] sm:ml-0" />
          <p className="sm:text-3xl text-2xl sm:font-normal font-semibold ">
            The user experience in terms of usability, trust, and <br />{" "}
            flexibility is everything, especially for the digitally <br />{" "}
            native consumer. The experience PayPal helps us <br /> provide is
            beating all consumer expectations
          </p>
          <p className="sm:text-[18px]">David Oksman Chief Marketing Officer</p>
          <p className="sm:text-[18px]">Samsonite</p>
        </div>{" "}
        <div className="absolute bottom-[-398px] md:bottom-[0px]   md:top-[-50px] md:right-[80px] ">
          <img
            className="md:h-[70vh] md:w-[38vw] h-[50vh] w-[100vw]"
            src="https://us.images.westend61.de/0001520210pw/man-unpacking-luggage-while-sitting-on-bed-in-hotel-room-DGOF01909.jpg"
            alt=""
          />
        </div>
      </div>
      {/* SPACE PAGE */}
      <div className="h-[48vh] md:hidden flex"></div>
      {/* NEXT PAGE */}
      <div className="flex w-[100%]   h-[90vh] py-[40px] flex-col px-[120px]">
        <div className="sm:border-gray-300  md:border-b-[2px] flex-col md:flex-row  justify- items-center flex">
          <div className=" sm:text-left  text-center w-[45vw] flex-col md:border-gray-300 pt-[50px] mb-8  md:border-r-[2px]  flex gap-5  ">
            <h1 className="text-xl font-bold">
              Executive Guide: PayPal enterprise integration
            </h1>
            <p className="text-lg w-[177px] sm:w-auto">
              Whether you're making a switch or upgrading your <br /> tools,
              learn how we make the integration process as <br /> flexible and
              seamless as possible
            </p>
            <p className="text-blue-800 pl-[10px] md:pl-[0] cursor-pointer flex items-center gap-3 font-semibold text-xl">
              Get the guide{" "}
              <SlArrowRightCircle className="transition-transform cursor-pointer transform hover:scale-110 shadow-md" />{" "}
            </p>
          </div>
          <div className="flex-col sm:text-left text-center w-[50vw] pl-[7px] sm:pl-[80px] flex gap-5">
            {" "}
            <h1 className="text-xl  font-bold">
              eBook: Sings you have outgrown your payment processor
            </h1>
            <p className="text-lg w-[177px] sm:w-auto">
              Payments processer stunting your growth? it might be <br /> time
              to look for a new one
            </p>
            <p className="text-blue-800 pl-[10px] md:pl-[0] cursor-pointer  flex items-center gap-3 font-semibold text-xl">
              Read the ebook{" "}
              <SlArrowRightCircle className="transition-transform cursor-pointer transform hover:scale-110 shadow-md" />{" "}
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-9  gap-[44px] ">
          <div className="w-[200px] h-[70px] ">
            <img
              src="https://cdn.heycarson.com/shopify-apps/icon/f0c056bcd6cba2f968440380d331526652fc4b4f.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-4 sm:text-left text-center pr-[4rem] sm:pr-0">
            <h1 className="text-xl  font-bold">
              Report: Forrester economic impact analysis
            </h1>
            <p className="text-lg w-[300px] sm:w-auto">
              Forrester concluded that our enterprise solutions deliver credit
              card and alternative <br /> payment processing services fast and
              at scale, while enabling high authorization rates.
            </p>
            <p className="text-blue-800 pl-[79px] sm:pl-[80px] md:pl-[0] cursor-pointer flex items-center gap-3 font-semibold text-xl">
              Get the report{" "}
              <SlArrowRightCircle className="transition-transform cursor-pointer transform hover:scale-110 shadow-md" />{" "}
            </p>
          </div>
        </div>
      </div>
      {/* SPACE PAGE */}
      <div className="h-[80vh] md:hidden flex"></div>
      {/* NEXT PAGE */}
      <div className="flex h-[100vh] justify-center bg-gray-200 items-center md:flex-row flex-col md:gap-[60px]">
        <Card
          src="https://www.paypalobjects.com/marketing/pp-com-ui/closing-cta/closingCTA-help.jpg"
          heading="Contact our sales team"
          content="Learn how payments can be leveraged as a catalyst for growth"
          button="Contact sales"
        />
        <Card
          src="https://www.paypalobjects.com/marketing/pp-com-ui/closing-cta/closingCTA-help.jpg"
          heading="Explore developer documentation"
          content="See how our flexible and interoperable technology helps to simplify integration"
          button="Visit developer docs"
        />
      </div>
      <div className="justify-center items-center  mt-[50vh] sm:mt-0 gap-5 flex-col sm:h-[60vh]   w-full flex">
        <div className="w-[79vw] flex  flex-col gap-5 text-gray-500 text-[18px]">
          <p>
            For the purpose of this study, Forrester aggregated data from four
            enterprise merchants to create a single composite merchant with
            $5,500 million in revenue processed yearly. Individual results will
            vary
          </p>
          <p>
            - Forrester, Commissioned by PayPal, December 2021. Forrester
            constructed a Total Economic Impact™ framework for those
            organizations considering an investment in the PayPal's enterprise
            payment platform, powered by Braintree.
          </p>{" "}
          <p>
            B2B International, commissioned by PayPal, Nov-Dec 2021, 828
            international surveyed among 304 mid-market and large enterprises in
            US, UK, and DE during November/December 2021. LE defined as
            merchants with annual revenue ≥$100M; Mid-market defined as
            merchants with annual revenue between $20M-$100M. Base N: Enterprise
            Braintree Users = 51.
          </p>{" "}
          <p>
            Major global payments network and PayPal internal data analysis from
            transactions over a 12-month period from Q4 2020-Q1 2021 in 8
            markets (US, UK, DE, AU, FR, IT, ES, CA) across 12 verticals. Does
            not include transactions from domestic schemes (e.g. Cartes
            Bancaires, EFTPOS).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
