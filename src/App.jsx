export default function App() {
  return (
    <div>
      <header className="sm:h-screen bg-[url('images/bg-hero-desktop.svg')] bg-cover bg-no-repeat">
        <div className="flex justify-between sm:p-8 p-4">
          <img className="sm:w-48 w-24 h-4 sm:h-8" src="images/logo.svg" alt="" />
          <button className="text-black bg-white shadow-[0px_8px_20px_2px] shadow-black/20 rounded-full">Try It Free</button>
        </div>

        <div className="sm:flex gap-20 sm:text-left text-center font-semibold p-10">
          <div className="my-auto space-y-10">
            <h1>Build The Community Your Fans Will Love</h1>

            <p className="text-[--very-dark-cyan]">
              Huddle re-imagines the way we build communities. You have a voice, but so does your audience.
              Create connections with your users as you engage in genuine discussion.
            </p>

            <button className="py-4">Get Started For Free</button>
          </div>

          <img className="sm:w-[50%] sm:mt-0 mt-10" src="images/illustration-mockups.svg" alt="" />
        </div>
      </header>

      <article className="sm:m-20 m-5 space-y-10">
        <section className="sm:flex">
          <img className="order-last" src="images/illustration-grow-together.svg" alt="" />
          
          <div className="m-auto space-y-5 sm:pr-40">
            <h2>Grow Together</h2>

            <p>
              Generate meaningful discussions with your audience and build a strong, loyal community.
              Think of the insightful conversations you miss out on with a feedback form.
            </p>
          </div>
        </section>

        <section className="sm:flex">
          <img src="images/illustration-flowing-conversation.svg" alt="" />

          <div className="m-auto space-y-5 sm:pl-40">
            <h2>Flowing Conversations</h2>

            <p>
              You wouldn't paginate a conversation in real life, so why do it online? Our threads
              have just-in-time loading for a more natural flow.
            </p>
          </div>
        </section>

        <section className="sm:flex">
          <img className="order-last" src="images/illustration-your-users.svg" alt="" />

          <div className="m-auto space-y-5 sm:pr-40">
            <h2>Your Users</h2>

            <p>
              It takes no time at all to integrate Huddle with your app's authentication solution.
              This means, once signed in to your app, your users can start chatting immediately.
            </p>
          </div>
        </section>
      </article>

      <footer className="flex sm:flex-row flex-col gap-10 relative bg-[--very-dark-cyan] text-white sm:px-20 px-5 pt-60 pb-20 mt-80 justify-between">
        <section className="flex flex-col absolute top-0 left-0 -mt-40 sm:mx-60 mx-5 sm:px-[10%] px-[5%] bg-white text-center space-y-10 rounded-2xl">
          <h1 className="sm:text-4xl text-2xl">Ready To Build Your Community?</h1>
          <button className="sm:py-6 py-3 px-[5%] sm:text-xl">Get Started For Free</button>
        </section>

        
        <div className="flex flex-col gap-5 sm:w-[50%]">
          <img className="w-60 h-8 -mt-14" src="images/logo-white.svg" alt="" />
          
          <div className="flex gap-5">
            <img className="mt-1" src="images/icon-location.svg" alt="" />

            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua
            </span>
          </div>

          <div className="flex gap-5">
            <img src="images/icon-phone.svg" alt="" />
            <span>+1-543-123-4567</span>
          </div>

          <div className="flex gap-5">
            <img src="images/icon-email.svg" alt="" />
            <span>example@huddle.com</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          <a href="">About Us</a>
          <a href="">What We Do</a>
          <a href="">FAQ</a>
          <a href="">Career</a>
          <a href="">Blog</a>
          <a href="">Contact Us</a>
        </div>

        <div className="flex gap-2 justify-center">
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
        </div>
      </footer>
    </div>
  )
}