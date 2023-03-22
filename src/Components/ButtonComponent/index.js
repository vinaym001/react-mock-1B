import './index.css'

const ButtonComponent = props => {
  const {itemDetails, onClickBtn, isActive} = props
  const {id, buttonText} = itemDetails

  const onBtnClick = () => {
    onClickBtn(id)
  }
  return (
    <li>
      <button
        type="button"
        onClick={onBtnClick}
        className={isActive && 'active-btn'}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default ButtonComponent
