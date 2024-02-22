import './App.css'

const numericButtonClasses = 'btn btn-primary w-100'
const numericButtonClasses1 = 'btn btn-info w-100'

const operatorButtonClasses = 'btn btn-warning w-100'
const specButtonClasses = 'btn btn-danger w-100'


function App() {


  return (
    <div>
      <h1>calculator</h1>
      <hr />
      <table className='center'>
        <tbody>
          <tr>
            <td className='text-end' colSpan={4} >
              <h2>0</h2>
            </td>
          </tr>
          <tr>
            <td>
              <button type='button' className={specButtonClasses}
              >C</button>
            </td>
            <td>
              <button type='button' className={operatorButtonClasses}
              >{'<'}</button>
            </td>
            <td>
              <button type='button' className={operatorButtonClasses}
              >%</button>
            </td>
            <td>
              <button type='button' className={operatorButtonClasses}
              >/</button>
            </td>
          </tr> <tr>
            <td>
              <button type='button' className={numericButtonClasses}
              >7</button>
            </td>
            <td>
              <button type='button' className={numericButtonClasses}
              >8</button>
            </td>
            <td>
              <button type='button' className={numericButtonClasses}
              >9</button>
            </td>
            <td>
              <button type='button' className={operatorButtonClasses}
              >x</button>
            </td>
          </tr> <tr>
            <td>
              <button type='button' className={numericButtonClasses}
              >4</button>
            </td>
            <td>
              <button type='button' className={numericButtonClasses}
              >5</button>
            </td>
            <td>
              <button type='button' className={numericButtonClasses}
              >6</button>
            </td>
            <td>
              <button type='button' className={operatorButtonClasses}
              >-</button>
            </td>
          </tr> <tr>
            <td>
              <button type='button' className={numericButtonClasses}
              >1</button>
            </td>
            <td>
              <button type='button' className={numericButtonClasses}
              >2</button>
            </td>
            <td>
              <button type='button' className={numericButtonClasses}
              >3</button>
            </td>
            <td>
              <button type='button' className={operatorButtonClasses}
              >+</button>
            </td>
          </tr> <tr>
            <td colSpan={2}>

              <button type='button' className={numericButtonClasses}
              >0</button>

            </td>

            <td>
              <button type='button' className={numericButtonClasses}
              >.</button>
            </td>
            <td>
              <button type='button' className={specButtonClasses}
              >=</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  )
}

export default App
