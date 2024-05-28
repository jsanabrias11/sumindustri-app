import { Link } from "react-router-dom"


export const GridCategories = () => {

    const categoriesData = [
        {
            id: '1',
            title : 'Withholding Calculator',
            to: 'withholding-calculator',
            enabled: true        
        },
        {
            id: '2',
            title : 'Calculator IVA',
            to: 'calculator-iva',
            enabled: false            
        },
        {
            id: '3',
            title : 'Calculator IVA',
            to: 'calculator-iva3',
            enabled: false            
        },
        {
            id: '4',
            title : 'Calculator IVA',
            to: 'calculator-iva4',
            enabled: false           
        },
    ]

    const CategoryTool = ({  title='title', to, enabled }) => {


        return (
            <Link to={ enabled ? to : ''} className={`flex items-end justify-between w-full h-32 p-2 my-2 border rounded-md shadow-lg
                                        ${!enabled ? 'bg-gray-500 shadow-none' : ''}`}>
                    <h3>{ title }</h3>
                    <span>&gt;</span>              
            </Link>
        )
    };


  return (
    <div className="grid grid-cols-2 gap-2 my-4 text-sm">
        {categoriesData.map(({ id, title, to, enabled }) => (            
            <CategoryTool                
                key={id}
                title={title}
                to={to}
                enabled={ enabled }
            />
        ))
        }
    </div>
  )
}
