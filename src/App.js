import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TourItem from './components/tourItem'
import './App.css'

// Replace your code here
class App extends Component {
  state = {isLoading: true, placesList: []}

  loadingView = () => (
    <div data-testid="loader" className="loader-cont">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  componentDidMount = () => {
    this.getData()
  }

  getData = async () => {
    const url = `https://apis.ccbp.in/tg/packages`
    const response = await fetch(url)
    if (response.ok) {
      const data = await response.json()
      const updateData = data.packages.map(each => ({
        description: each.description,
        id: each.id,
        name: each.name,
        imageUrl: each.image_url,
      }))
      this.setState({placesList: updateData, isLoading: false})
    }
  }

  placesView = () => {
    const {placesList} = this.state
    return (
      <ul>
        {placesList.map(each => (
          <TourItem key={each.id} item={each} />
        ))}
      </ul>
    )
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="bg">
        <h1>Travel Guide</h1>
        <hr />
        {isLoading ? this.loadingView() : this.placesView()}
      </div>
    )
  }
}
export default App
