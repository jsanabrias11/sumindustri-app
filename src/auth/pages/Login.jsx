import { useNavigate } from 'react-router-dom';
import { Footer } from "../components/Footer";

export const Login = () => {
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home');

  }


  return (
    <>
      <main className="flex flex-col items-center justify-center w-full h-screen bg-black text-white font-mont">
        <div className="mx-auto min-h-[65%] pt-20">
          <span className="text-slate-300 text-sm">Tools for</span>
          <h1 className="flex flex-col uppercase text-4xl text-center">
            Sumindustri,
            <span>DJ</span>
          </h1>
        </div>

        <div className="w-[85%] max-w-[600px] mx-auto bg-white text-black font-semibold px-10 pt-20 pb-40
                        rounded-tl-[120px] fixed top-1/3
        ">
          <h2 className="text-2xl mb-6">LOGIN</h2>

          <form className="text-dark/75">
            <input type="email" placeholder="Email"
              className="w-full px-2 py-2 mb-2 border border-solid border-dark/50 rounded-sm outline-none focus:border-primary/50"></input>

            <input type="password" placeholder="Password"
              className="w-full px-2 py-2 border border-solid border-dark/50 rounded-sm outline-none focus:border-primary/50"></input>

            <button className="w-44 h-20 text-lg text-white bg-dark rounded border-2 border-solid border-dark font-semibold
                         hover:text-dark hover:bg-white absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                    onClick={handleSubmit}
            >Sign in</button>
          </form>
        </div>


        <Footer />

      </main>
    </>
  )
}
