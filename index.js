const Notification = props => {
  const {className, note, url} = props
  const p = (
    <div className={` ${className} notification`}>
      <img src={url} className='image' />
      <p>{`${note} Message`}</p>
    </div>
  )
  return p
}

const element = (
  <div className='container'>
    <div className='sub-container'>
      <h1 className='heading'>Notifications</h1>
      <Notification
        className='blue'
        note='Information'
        url='https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      />
      <Notification
        className='green'
        note='Success'
        url='https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      />
      <Notification
        className='yellow'
        note='Warning'
        url='https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      />
      <Notification
        className='red'
        note='Error'
        url='https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      />
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
