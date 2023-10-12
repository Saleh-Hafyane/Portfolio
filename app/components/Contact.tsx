
function Contact() {
  return (
    <section className="flex flex-col my-14 mx-auto ">
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/2f323d0d-8186-483c-b348-1a0bf9426dff" method="POST" className="flex flex-col w-full md:w-7/12">
                <input type="text" name="name"  placeholder="Name" className="p-2 bg-transparent border-2 rounded-md border-blue-200 focus:outline-none" />
                <input type="text" name="email"  placeholder="Email" className="my-2 p-2 bg-transparent border-2 border-blue-200 rounded-md focus:outline-none" />
                <textarea name="message" placeholder="Message" rows="10" className="p-2 bg-transparent border-2 rounded-md border-blue-200 focus:outline-none"/>
                <button type="submit" className="text-center inline-block px-8 py-3 my-6 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-950 to-blue-500">Contact Me</button>
            </form>
        </div>
    </section>
  )
}

export default Contact