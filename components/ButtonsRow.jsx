
import { Button } from "./Button"

export const ButtonsRow = ({buttons}) => {
  return (
    <tr>
      {
        buttons.map(button => (
            <Button key={button.label} {...button}/>
        ))
      }
    </tr>
  )
}

export default Button
