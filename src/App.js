import {Component} from 'react'
import ButtonComponent from './Components/ButtonComponent'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {selectedItem: languageGreetingsList[0]}

  onClickBtn = id => {
    const selectedItem = languageGreetingsList.find(
      eachItem => eachItem.id === id,
    )
    this.setState({selectedItem})
  }

  render() {
    const {selectedItem} = this.state
    console.log(selectedItem)
    return (
      <div>
        <ul>
          {languageGreetingsList.map(eachItem => (
            <ButtonComponent
              key={eachItem.id}
              isActive={selectedItem.id === eachItem.id}
              onClickBtn={this.onClickBtn}
              itemDetails={eachItem}
            />
          ))}
        </ul>
        <img src={selectedItem.imageUrl} alt={selectedItem.imageAltText} />
      </div>
    )
  }
}

export default App
