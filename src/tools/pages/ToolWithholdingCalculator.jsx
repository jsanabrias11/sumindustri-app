import { Link } from "react-router-dom"
import { LessThan, MenuFooter } from "../../components"
import { ToolWithholdingForm } from "../components/ToolWithholdingForm"


export const ToolWithholdingCalculator = () => {
  return (
    <main className='font-playfair container-center'>
        <header className="flex items-center px-6 p-4 bg-dark text-white">
            <Link to="/tools">
                <LessThan stroke='#ffff'/>
            </Link>
            <h1 className="ml-4 font-semibold">Withholding Calculator</h1>            
        </header>

        <section>
          <ToolWithholdingForm />
        </section>

        <MenuFooter />
    </main>
  )
}
