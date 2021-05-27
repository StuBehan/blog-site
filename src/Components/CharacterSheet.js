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
    charisma: ''
  })

  const onChange = (element) => {
    setCharData((prevState) => ({...prevState, [element.target.name]: element.target.value }))
    console.log(charData)
  }

  return (
    <div className='character-sheet'>
      <form className='character-sheet'>
        <input type='text'
          name='name'
          placeholder='name'
          className='name'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='race'
          placeholder='race'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='alignment'
          placeholder='alignment'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='class'
          placeholder='class'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='armourClass'
          placeholder='armour class'
          onChange={element => onChange(element)}
        />
        <input type='text'
          name='initiative'
          placeholder='initiative'
          onChange={element => onChange(element)}
        />
        <input type='number'
          name='strength'
          placeholder='strength'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='dexterity'
          placeholder='dexterity'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='constitution'
          placeholder='constitution'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='intelligence'
          placeholder='intelligence'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='wisdom'
          placeholder='wisdom'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
        <input type='number'
          name='charisma'
          placeholder='charisma'
          min='1' max='30'
          onClick={element => onChange(element)}
        />
      </form>
    </div>
  )
}

export default CharacterSheet;