import { useState } from 'react';

const CharacterSheet = () => {
  const [charData, setCharData] = useState({
    name: '',
    race: '',
    alignment: '',
    class: '',
    armourClass: '',
    initiative: '',
    strength: '',
    dexterity: '',
    constitution: '',
    intelligence: '',
    wisdom: '',
    charisma: '',
    description: ''
  })

  const onChange = (element) => {
    setCharData((prevState) => ({...prevState, [element.target.name]: element.target.value }))
    console.log(charData)
  }

  return (
    <div className='character-sheet'>
      <form id='char-sheet' className='character-form'>
        <div className='name'>
          <label for="name">Name:</label><br></br>
          <input type='text'
            name='name'
            placeholder='name'
            className='span'
            onChange={element => onChange(element)}
          />
        </div>
        <input type='text'
          name='race'
          placeholder='race'
          className='race'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='alignment'
          placeholder='alignment'
          className='alignment'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='class'
          placeholder='class'
          className='class'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='armourClass'
          placeholder='armour class'
          className='armour-class'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='initiative'
          placeholder='initiative'
          className='initiative'
          onChange={element => onChange(element)}
        />
        <input type='number'
          name='strength'
          placeholder='strength'
          className='strength'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='dexterity'
          placeholder='dexterity'
          className='dexterity'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='constitution'
          placeholder='constitution'
          className='constitution'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='intelligence'
          placeholder='intelligence'
          className='intelligence'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='wisdom'
          placeholder='wisdom'
          className='wisdom'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='charisma'
          placeholder='charisma'
          className='charisma'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <textarea form_id='char-sheet'
          name='description'
          placeholder='description'
          className='description span'
          onClick={element => onChange(element)}
        />
      </form>
    </div>
  )
}

export default CharacterSheet;