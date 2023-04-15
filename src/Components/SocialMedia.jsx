import React, { Component } from 'react'

export default class SocialMedia extends Component {
  render() {
    return (
        <div className='sm:flex sm:place-items-center sm:justify-end sm:gap-5 hidden'>
            <a className=' ' href="https://github.com/rafamndza" target="_blank" rel='noopener noreferrer'>
                <img className='h-12 self-center' src='./src/assets/Icons/github.svg' alt="githubIcon"/>
            </a>
            <a className=' ' href="https://www.linkedin.com/in/rafael-mendoza-60242820b/" target="_blank" rel='noopener noreferrer'>
                <img className='h-12' src='./src/assets/Icons/linkedin.svg' alt="linkedinIcon" />
            </a>
            <a className='' href="https://t.me/rafamndza" target="_blank" rel='noopener noreferrer'>
                <img className='h-12' src='./src/assets/Icons/telegram.svg' alt="telegraminIcon" />
            </a>
        </div>
    )
  }
}
