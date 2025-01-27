const socialLinks = [
   {
     href: 'https://x.com/NicolRotimi',
     icon: <svg width="24" height="24" viewBox="0 0 24 24" className="text-yellow-400" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M6.25 3C4.46403 3 3 4.46403 3 6.25V17.75C3 19.536 4.46403 21 6.25 21H17.75C19.536 21 21 19.536 21 17.75V6.25C21 4.46403 19.536 3 17.75 3H6.25ZM6.25 4.5H17.75C18.725 4.5 19.5 5.27497 19.5 6.25V17.75C19.5 18.725 18.725 19.5 17.75 19.5H6.25C5.27497 19.5 4.5 18.725 4.5 17.75V6.25C4.5 5.27497 5.27497 4.5 6.25 4.5ZM6.91406 7L10.7822 12.5283L6.91113 17H7.93262L11.2344 13.1758L13.9102 17H17.1289L13.0127 11.1172L16.5684 7H15.5684L12.5615 10.4717L10.1328 7H6.91406ZM8.46777 7.84766H9.74902L15.5752 16.1523H14.2939L8.46777 7.84766Z" fill="currentColor" />
     </svg>,
     alt: 'Twitter X'
   },
   {
     href: 'https://www.instagram.com/rotiminicol/',
     icon: <svg width="25" height="24" viewBox="0 0 25 24" className="text-yellow-400" fill="none" xmlns="http://www.w3.org/2000/svg">
       <path d="M8.75 2.5C5.58319 2.5 3 5.08319 3 8.25V15.75C3 18.9164 5.5831 21.5 8.75 21.5H16.25C19.4165 21.5 22 18.9165 22 15.75V8.25C22 5.0831 19.4164 2.5 16.25 2.5H8.75ZM8.75 4H16.25C18.6056 4 20.5 5.8939 20.5 8.25V15.75C20.5 18.1055 18.6055 20 16.25 20H8.75C6.3939 20 4.5 18.1056 4.5 15.75V8.25C4.5 5.89381 6.39381 4 8.75 4ZM17.5 6C16.9475 6 16.5 6.4475 16.5 7C16.5 7.5525 16.9475 8 17.5 8C18.0525 8 18.5 7.5525 18.5 7C18.5 6.4475 18.0525 6 17.5 6ZM12.5 7C9.74759 7 7.5 9.24759 7.5 12C7.5 14.7524 9.74759 17 12.5 17C15.2524 17 17.5 14.7524 17.5 12C17.5 9.24759 15.2524 7 12.5 7ZM12.5 8.5C14.4416 8.5 16 10.0584 16 12C16 13.9416 14.4416 15.5 12.5 15.5C10.5584 15.5 9 13.9416 9 12C9 10.0584 10.5584 8.5 12.5 8.5Z" fill="currentColor" />
     </svg>,
     alt: 'Instagram'
   },
 ];


const Contact = () => {
  return (
    <section
    id="contact"
    className="section mb-16"
    >
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
         <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
            <h2 className="headline-2 lg:max-w-[12ch] text-black reveal-up">
            Contact me for collaboration
            </h2>

            <p className="mt-3 mb-8 max-w-[50ch] text-black lg:max-w-[30ch] reveal-up">
            Reach out today to discuss your project needs and start collaborating on something amazing!
            </p>

            <div className="flex items-center gap-2 mt-auto">
               {socialLinks.map(({ href, icon}, key)=>(
                  <a
                  key={key}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="w-12 h-12 grid place-items-center ring-inset ring-2 ring-zinc-50/5 rounded-lg t
                  ransition-[background-color,color] hover:bg-zinc-50 hover:text-zinc-950 active:bg-zinc-50/80 reveal-up"
                  >
                     {icon}
                  </a>
               ))}
            </div>
         </div>


         <form 
         action="https://getform.io/f/byvvzopa"
         method="POST"
         className="xl:pl-10 2xl:pl-20"
         >
            <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
               <div className="mb-4">
                  <label 
                  htmlFor="name"
                  className="label"
                  >
                     Name
                  </label>

                  <input 
                  type="text" 
                  name="name"
                  id="name"
                  autoComplete="name"
                  required
                  placeholder="My Name"
                  className="text-field" 
                  />
               </div>

               <div className="mb-4">
                  <label 
                  htmlFor="email"
                  className="label"
                  >
                     Email
                  </label>

                  <input 
                  type="email" 
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  placeholder="@example.com"
                  className="text-field" 
                  />
               </div>

            </div>

            <div className="mb-4">
               <label 
               htmlFor="message"
               className="label"
               >
                  Message
               </label>

               <textarea 
               name="message" 
               id="message"
               placeholder="Hi!"
               required
               className="text-field resize-y min-h-32 max-h-80"
               >

               </textarea>
            </div>

            <button 
               type="submit"
               className="btn btn-primary w-full justify-center bg-yellow-500 text-black font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:bg-yellow-700 hover:ring-2 hover:ring-blue-300 focus:outline-none focus:ring-4 focus:ring-blue-300 active:bg-blue-700"
               >
               Send Us a Message
               </button>



         </form>
      </div>
    </section>
  )
}

export default Contact