import { Layout, MenuFooter } from "../../components"
import { ToolCategories } from "../"

export const Tools = () => {
  return (
    <>
      <main className='font-playfair container-center'>
        <header className="px-8 pt-6">
          <h1 className="text-4xl font-semibold">Tools</h1>
        </header>
        <Layout className=''>
          <ToolCategories />

        </Layout>
        
        <MenuFooter />
      </main>      
    </>
  )
}
