import React, { useState, useEffect } from 'react'

export function Form() {
  const [name, setName] = useState('Mary')
  // name !== '' &&
  useEffect(function persistForm() {
    localStorage.setItem('formData', name)
  })

  const [surname, setSurname] = useState('Poppins')

  useEffect(function updateTitle() {
    document.title = name + ' ' + surname
  })

  const [fullname, setFullname] = useState('')

  useEffect(
    function updateFullname() {
      setFullname(`${name} ${surname}`)
    },
    [name, surname],
  )

  setName('Yondu')
  setSurname('Udonta')

  return <div>{fullname}</div>
}

export function NotComponent() {
  const [name, setName] = useState('Mary')
  const [surname, setSurname] = useState('Poppins')

  setName('Yondu')
  setSurname('Udonta')

  // return <div>{name} {surname}</div>
  return `${name} ${surname}`.length
}
