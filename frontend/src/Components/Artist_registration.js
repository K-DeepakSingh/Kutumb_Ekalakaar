import React, { Component } from 'react'
import Artist_Navbar from './Artist_Navbar'
import { Link } from 'react-router-dom'
import './Artist.css'
export class Artist_registration extends Component {
  render() {
    return (
      <div>
    <nav className="navbar bg-light fixed-top" style={{backgroundColor: 'white'}}>
        <div className="container-fluid">
            <div className="left-components">
               <Artist_Navbar className="nav_artist"/>
                <a className="navbar-brand " href="/">
                    <span className="text-danger text" > <strong>ekala</strong></span>kaar
                </a>
            </div>
            <div className="right-component" >
                <form className="d-flex" role="search">
                    <input className="form-control me-2 " type="search" placeholder="Search Opportunities
                    " aria-label="Search" />
                    <button className="btn btn-outline-danger btn-search " type="submit">Search</button>
                </form>
            </div>
        </div>
    </nav>


<div className="mt-5"  >


    <div className="container reg" style={{marginTop:"70px"}}>

      <div className="header container  text-center  mt-5 " style={{marginBottom: "25px"}}>
        <span className="register-text">
            <span className="text-danger ">Register</span> Your self
        </span>
    </div>

        <div id ="form-container" style={{width:"100% ",display: "flex",justifyContent: "space-between"}} >
          
            <div id="img-container"  style={{width:"30%",marginTop: "86px"}}  >
                <img  
                // style={{boxShadow:0 10px 40px rgba(206, 13, 13, 0.5)}}
                className="w-100 img_reg" src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIMA6QMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAADBAECBQYAB//EADsQAAIBAwMCBAMHAwMCBwAAAAECAwAEERIhMQVBEyJRYXGBkQYUMlKhsdEjQsEzQ/Bi8QcVFlNyk+H/xAAaAQACAwEBAAAAAAAAAAAAAAACAwABBAUG/8QANBEAAgIBBAAEBQMDBAMBAQAAAQIAAxEEEiExEyJBUQUyYXGRgaHwFLHhI0LB0SRS8TMG/9oADAMBAAIRAxEAPwD5EOaODLipLl1q5UItXKhVqSozEaISjGo2ogYEZjajEEw6OKsQYdZNtqKVDJJUkzCrJUknX/8Ah7HFN1K4aRQXjiDIT2ycH96x6s4UTTphlp1t6Iep9Ou4nibEeoeb8wGxFZVbYQVM0su4EET5gJPLuRXYE5JMkNmjAgZllbFXiBmQ75q8Qd0GWwKvErdASNkVeJN0UkNViTMUlY1REYpzE5Cd6S0csVkNJaPEWelmMEA+KGGII1UuUaqlwRqpJFSSXUUcCXFSTMuKuSXXmpJCrUlQ0ZzwaKUYxG3/ADNWIJjMZG24+tGIJh0IPBH1ooEOoYDv8qKDzCornbS30q5UbtFK3MRlhZ49Y1AqcEZqj1LHJnWdP+0PTelOz2fTY45HGkkTEjGc43NYbFL9mbU8nQji/bOHSUSzXU+zKH59aV4Cj1MYbGPHEXlsre66fK0XTYLNnGI3eVsjf0rSt20jJ4mdqQy4A5mLJ0q+jfSkDze8Q1VtS1G9ZgspsT0kjpfUu1jc/wD1mmb094rZZ/6mWHR+pk4FhcZxxoqeInvB8Oz/ANTJPQ+qb5sZRj1wP81fiJ7yvDs9ou/R+oEkfdWz6al/miDqRAbcpwRF26F1Nn0LbZb08Rdv1oWtQdmGldjcgReb7N9VGc26g+8q/wA0vxVbqP8ACdPmiU32e6imousKgb7yUB5hq6iZcfTri4QsukAfmOKCus29Q79QunALesFL0udBlmTGOxzUbSuBmDXr6XOOokbcFgviDJ7YpAQk4mtrNoziCFvqz58YNUqbjiE9m0ZxKtbAcuajVlYKWh+oJoB+Y0OziFv5lPB+NBzDyIVEwoOkneociMAEIYwV1AbdsUROBzAA3NgS1tGpkCtjDHvRou84zFWN4YJI6nR2tnE8qytDBFbQA6iFBLe5yKaazUQG5mdbxcv+n37Tct7OyTSHtrVpCAQWiA/QUh9QqPsadGrQvbXvT+80bS16Y7ahbxEZH+2ukfpT0ZG6mK6u6odZ9/pNOOCxEq/0ISv9oWNd6LsnHpEqcBd/G7gfeMxPErMPuUeMf+2Bj34oWrGAQeYS3spKOOB3NOzZFUr4MIXG50igsx2Y2tTnAHcZie2ZnbSpB3/BSxahwAY59NavJEKqxOq4wMjOABR+sTnA65lZp4javErA42bagRwx8sdbU1aguMZnzDqdmLa7YJvCzcAbinFT6TOpUx2SVYrITWdukVwR4aPqwwPY/H+azEurcniakClepgXX2h6g8hDyMHQack8H1+PvRBBANh6jPSPtNfWpUhjkHOc7n41eMGWGyMGfU7W/N/aQS20pj1qGIChvlmm7R2ZlNmTgQTTxyM0twpSUNp53AHFEFgm3AwTzPLNG8kkbyMGx5WPFXgkZEvcC+1jzEo5Lia/CtEfBOFaVAOfYGhYsqEmWq1WuAvMzep3kX/mlva28fhz5HisAEJ/nPxrFQ9llvJzOjelVNJ4xI6qLqaUTWhdCVwwx3rorXhhg4nHfUbkIYZM56WwkAxdh5JG3yx3+FaFKDhjMVnjNhkG0CLS4QAAYHt2rSqKgzic57rLjgnPtEZ11HUCwI4oCQ4JTuaFQ0sBYOJkXUCCRiSdTbkg965/gkv5p2hqVFYNf7xTwwMBM7etD4Q3YWH47bCW/aDlB9aXaSpxmO06q3IEA1L8Qx3hc5ld6HdD2w34gQuonPFMIx1AByeZKxPgALhj3OwxVbAZBZt6jECwRSZnZW22Cjk+9Mr2I2TzE3B7EIXidD0u+W5YqjSPJ+XwdbD034GKddcnh+X8ZxMWnodbs2fTn+dcTQubiSG6j+85yR5XkcauPbis1WopJ86A49R3N1ul1G3GnuK59CfL+ntCW91KpCwv5SPMCME10EWu4h6uvWcm6zUaRDVqRz6H/ALmlaXbxyB5QT4e4QcVepYU1+UcmL+HUtrNQGsbAXr6maKMb6QXGp0I3XPOM1599O97+IDg+k9xXqqtHUKNoK45j1vJkbAOvIOa65rBClxzPMreVZxSfJnjEdE6gqoZl1LyPWsltoDivHfRnQ09Betrg2cd+8hp3WYIuRtlT2zQmxlcoOiMiMSmu2sWN6HB+0Xb+mAjtqMjZJ9alSf0oXPbGS+0fEC20YVAIre9NglV4gHRmQ6XHb3FNfUgPsPEz06A+GLEP6T5z1m16hYXH3e+uXlGzLmUuN+DvVDB6lMChwZmM2+aOAeeZKNuKoy/tPq/2TcDoVriQp5cEKNyc1fjqODAOjsYllMevUYSrJhyQdhjY/GtfB4nPCkHdiJXVzNNIAIACRpQLuWNOrUKsx6h2ewcc9Sby9h6BbP48uu7dcFQc+EOcD3964mq1TWnYvU9JotCtI8Ru5lWsWgC9uEf742/mBGlT2BotPcKxsVct9R/zHanQnUHxLHAQdYP941NfTRIPFjJDKSHU5xtTmtsXIdfxMw0unfDVWZAI4PrM43hkjgmP4UlXznGcZ5rHfqWNXHpOrp9FWLj9R1Mfqafduo3SjWAXJXI4HYfCnaT4ryVu5mDX/wD8+HrW3TABh3/j6zL8Wcw6ZmAcHAHtWrxLVUlGmTwaLHQWoeR365Gc8RdkAy0inPrTgLsEuJksOl3AVnj6+0Sl2Y4qbmVuRIa0KcGKyYrLevORN+ksyNrQRcZ4A+VKBE0Mp957K+q/Sr4gbTABmGwJpmTAjCzO4K6vKBwBV5Jg4AhoBDkKUy2TnVRDHUAk9zZsbd7W51QyyQJJH+NACSQePUc0FypkA9SVuSM+sOMCNnSe5IJAd28xz+9NNaoO/wAQFvew8A/rHYrWSFEdPEMZPlOdP1GMj500AWg1pwD/ADuILHTML7uWB/v9I907xGAeVyM7BTQ6WmwL4bekb8T1WnJGoTGWH7ibKXIEajxiWC48pqrEJIVfU/gS6LVVGtfkKv5J9Y3bSbkF42wcKqjBzRbNULCXOV9Ik2/D2oUVZWwd5OQf/sc8RTEiMPNns3mVhx/msz0vqBhxj2m6rVVaN81NnPYPRjUU2sZ1Z0ruuD+lK3Be+WE0+G1nKnyH8wMTrNclzto2Vcce9IVjddvb06m1610umNaDOeSYUqrjnPb4VrOn3E7pzV14UeTucz9t+mibp4uo4i00RxkAfh9KiLgYAlX2biGZuZ85lDRuUcFWBwQexookRiyVGkOs4223oWzjiNrA3cz6fYGztLKC0luo45FXLqzgNv7c96Cuku4IHAmi69aaihPLftGE0pbsVuUYAbBHycfWugrBj1OBZWyLywI+8X/9SWfSrgLc2s0TsCI53wyBse3f+aC1CwxnEZQUU7tuSJznT4J+sdSnv7nzxq+okA4c52x7Viq0/n5nUv1QFZ29+06a4uYXwJQQvYkU6yxQ2GEVRp7fDDoR9s8xd7q1jGsEMDnzDf5UDatQ2Zor+GWsu3ODnozGv721nVhEnhl8nJHesNupptBAGJ19N8P1VByzAiZXVLs3kyStvIY1V9sZYbVzQnPM6i4qTaOpnPN4TEOhXt5lIx712NNZ4LDjj6TzuvrGpQruwc+sDMcxrIGzqPGc10WtNoO0dzhJQtGNzdRK4DhMrgH3pj7kr9oqsJZcR3M7VqPm5rCzFu50woXqe2NBiNBOJ7Aq8Qd0rEnif7ir7GmgZgniWDIvlPJ5Iqt3tK2+pjlssUsoII1E75zvT6gjHmZb2etcjqbFjEudKOxkYg41cexoggd8/wC2ZbbXVAuPNHdIjkjeceVXC4J2IrM9qOxwJ1E0rVVYY/vHmkiw7wSeKUyBlgSfQA8Zp1FtpwigTJfRQwNtrHj1MZg8GeJJo1cSBRsSQCfh/itJ3BizesxLsdAq8kevGZpIkQgAAQycsSOAO1Y0pKE2Afwzr26sXYpfOB/xzGk8OVNeBlyMMjbZ4/am+O1IwR1MH9FVqm3KxwecwiyRaRGAPINJPOT65q2e04depdNGnANb/MOPv9f8RmJjM3hoRrbY9qyMjsCp+X951BdTWQ4GX9vT7xmJcA6cltO2B77/AOaLatZ2+0V49lql/eK3N390jYsC78rGpAfHwokS+w4zx7wLbNLVghefac/efbC2wVjtmD7jTLkHPwrSo8MYJmGwm1tyicL1CVri5e5dgTMS2wwPpSHAHImqsnGD6SttMYpEkXlTVLjPMNjgTRNyAkjXCQztKcqHTUfma0ZCDkfaZNptbIP3hLO8VoHRS6Ro2uLDk6CPT29qJWBXMU6bbABBXsst51AwwpkykaUXgkjkf89aQ7FjiaUQVrmd906zTp9lHFJKcoo2H9zHmmCosACOoo6kVlmRvmit9fxQl0MfiRu2AVGCKZhc7V7mYNZg2v8AIOjM65e0lIiFzGj9kOfnvXI1OgYPgfL/AGnqND8bQ1Fum+vrFbu96XBKYXs9ZTAZopyayf0IGSp6jz8TuOA2OYS9vLOKygK9M1+Mh0eYbYPc4oqNN47Ng8xWo1l2mG1jwZz15NfXjNruCgZcrbhiQB6b11a/h5QemZxH+Io2Rg7ZnpHPE+GGw35pqVWI+DF23021HBnrg6hzRaogpgStACtvIi7RqRxWYV+WbGvy5zBMMbH9qWODzGnkcSvyNN4icGLBGxxS46NwQqRlxnjYdqJeRAY46jNmIfHeCUsihjgigdiBlRCA950cFrZj+tHehyiDygKcdt9/alVai02BCDz7RdtFYQtx+szri3v7mQLIjGJMhZQNK4+daQ7NgDv6SiKxlm/6mpYWs5dQJy7BSzkNuFHYjG/O1Xi9LxjHH8/MoNpLtKwfPPsP7j/mblysUdrELcaJ3wTITwcbfDPvR6i+wEhupn0mmpXDIOfrB2k8kiPFPGBMX/Dqwc/D0pCXOEyvpNllFTXAOO/0/nEbUyRL+NvFPAwdvU0hKHtbk8mdJ9XXRUSFyo9BLLMSArY1cZbbFdIVJpRusfOf51OC+ru+Jv4enq2gHP8AnPp+ZpWs33UqWgZlH942b3PwqMpuXg4iif6SzB8/1E0zNA0beA48Tw2Kkdjg/KsI4O36zo4OA3vPkvU+oNdsJZby/MynZpgFGf8Apwa2sR6cTIqnPmwYjPeSXaDxTmVT5n4yO1Cz7lwYa1hGyOjFTIWyGPm7+9KJzGgYnopjE4b09s4q1facyOm4YhnkeXMmoue/rUOWOZQwoAhra7gFuqaZPG1YOw04+tNFqivbEmlvG3+k6n7JdKxIL5pR42MxDTnSPXPrj96IU4UFvWKOrBsKJ6d8ToUjjnbxJbiON1f8LE5+lLGrFZ2H9I5/hj6hRbWMEdwF3Z2UqaRdwRnJJYEk1nt+IrtwCcj9pro+C2+JuKDaeMe4ImXeWMUNmSl9HLOGBXSAAPnS9NrjqSdx/n/cdqfhg0qDZWQPbv8AH0mNHbf1GeWIFCPKSN/Wtlelc2eboznaj4jUtOaxkjGYzK+rpUUaP5oJCMH0bf8Ax+tJr0y1XtWh5P8AePu1b3UrfZX5Rn8dA/mZTqFmMmPP+HOe1bi9lb5Iz+s59dNF1eFbH3Hr94N/EZyu3tVtqG2BiIsaRRYaweopcDRs2M5rNhCeZszYF4HEXdscVe0jIk3A4Ji0xdm22rKQwM2qVIgvP+Y1fml+SSQ3fGDvzR4g7oxDMIlGrt2ohgRbDMv4kbNrXEZ9RvUJEgGBNeymVVGJGkO59s4ONvjSyAoyo/WQA2Ngn9JSG+eNCJZCQu2GbO9EmqasjwxxGnQU2oTceYX7+GOhFaMvjU2eR/Faxf4x6nLOn/p1PORNnpl/N96WW7RpkKGPUN9j2yfnzmufqkyNqmb9PuzuM31ghkgW5t9BiyBgkZUZ4Ddh7UrR2KGKt3Ha2qzAKniRPPcx3ixWtp4kLDzSAjI7bitq212DaeJi8O+p94bPHr9Z6eDwcs66tJAEg3GT2H0pLlbHye/SdKhmqqCL164jkHUFhDQTtrRU4znzUVbrjzNE3U27s1oefxBASNbTCEnM2pQu/f0x71v/ANNsD2nD/wDIViW7J6P5nCiyeDxo7gEKpKM0c5bGPVT2qthxkx5t5wvf2mHN/Rn8pzWM8HidAeYTz8al4NUZB7GDLZqoUlWKnKkg1YJkwPWW1liXwCR8qmcmUAFnffZ24kl6PBHGxDR6l27jVwfrSNQXFgVSeszfoEpNO6wDvGf3+8Znt3U63lVxp1Y4K1magnzP1+86der2jCfMfwcdnHp9pmz9QVZ9JIDY1YHNbtDbYLfNWAP3yJyfjVFVmmOy5iwxxyBgn2EVbqbHxPDbACn8XJI3H7Uu3UWPZnGMH0gU6SqmjaHLbh6+mYDx5riMlUJJ3xvz8a6Z1AsrnFXRCm4A9Z+/Eo0M3glgCNgWGrGP5rlW70IsPZnoKfCsTwTjaPQ/z0gCihWdhp9yf2pa6gBuuTCs0xIAB4HtEppQGwrE5rdZcoUbZzKdJYWPiDgQLuxXDHPpSqiR5j6R2oRSML6xWR2G4FNLs0QK0U8QTSgn1oC/EYtfqZXUPy0G4w9glC+vAUcd6YzZ6gIhHcgnIHvQbozbgQ0QOoDse9MRwDF2VkrxNBVWJHPiAg4xjbPsP5qPzyIFfse5W3YMDqXLtsoA/FS+cZzNIIz1NYrGZ1NwRJjbw/5b/FDvNVR29mCtX9TqAD0P5iEtbXwIiYWdgMnY/AUNtq4AHtNFGmdWZmH04mlFdXFqqFXRcZJicZDDO4YVmrCMM+s16kOHPtN63vRDYmZcFCviLHvpZO5B7URUk7h+v3mIWAeQjPsfcQVv1QySiWGMG2iYON91I5yfnR3EgAmNpCMSoODLztCihJlAkEhHkUZ49Pf/ADROfCUErnPR/ntB0rHVuwrfbt+YHjj/ADKydYFnayzSOgGBghSdB7DFXptzEr6RnxCuulA3+8dA4/M5W86uJo8K0Umo5Mke2T7jJx9a672gLgGearpYvuYYnM3TapjjsawTpieR+x4qS54+1VLE8ATUkl9QUfqasdyjO/8AsZbXE3SJBHFqjLkE8Y2Gd6O96Nm2w4MRp21KWhqvl7x6TWgs4LUl7uN1RFOzNq+dYGrorClWyOZ111uqvZg6YPvj8zJv4I4ZJjDIkJZSSrDkZ4FEF1Z2snrxKW74eu5bR1zn+esyp4rQAEAO+MsMGuhVpWz/AKi4nI1XxBNv+i2R6fmUuJpbaNDbysniKC+OFFXdYPlIziJoqz58kZlrXqKtDeKS0jQwFwW5YD+K5lvksXjszq1gvWcegmPc3bSqjTSM4Hqa3201MgI7mHTX312Mo6/tASLk+UD5UJ0yhcgxv9cxbBEAT6nNDXkHmHbyPLBORTGYDqJStjjIgHCgZ4pRxiOG7MrlfzH6UMZkyioQpIyMDeiIMAGGTBAYgcUhic8TaiqFBMZiAIzjIHIFStCxxLttCLxLNoKkO+B6+nypjLtbEz+KHrBMpEAgLuWx/avrWhUwu95jews3h1//ACN2krSRsWyDny4GflWa1gXJM30IRWAvQM1Z5HSzOnLFF4C+9K1B3mpB1H6VRTXfa3JJ4ggDcXhR2OQofbYA43rMriurcB6zZZUbbyjngAf2nRQTWdl0sAW7PC8hyGycDGCBn3pQ1FrOR7wToaF8xbAH95oWclvbgExPKHTyI2FAB9e1OoVFsJtPB9YvWG6yn/xwCR7ev1/xKdeu7GOAXbyaMnBI339Nq61DJjwyAQJwr6bFO8Ehjj+GfOOq3QubuR11FHOVLE8dtu1UQi+VBgQwzv5rDlveLxuU77UEMcwRJYknmpKkg5FSXie1Ed6rMkkM3rUkl4jqlGeOTRL7wW6nW9CuriLpgRPEMfisfK2AD3rJqaK2BtZsEzoaHUWBhTXXkDkn2nQ2f9OGMzZAfLHWc4Ucbeuf2pNCqEKEdciHq7LXvVlb6fmY9/diR2lj0HUSMD+1a6+l1VdaeYj/AJnC+I/DbrLcKpyB+n6GAS7GvJCEgEdvStxbxFzXOUlXguRaCP0id2yXSeHH5R+bOxPoa5/hG05M6/ipSAoOZnWbm2uSp04cGNj2wRg1nur3DaOTxNdD8b88RWON0YFhyNxWlUKkbh3MtlgsU7T1Ds5CnSRj0NRkb14lI6dDmDW38RNfjRL7FsVguYKcdmdSjLDPQgJodP8AuIf/AInNChLQ7GUcQDEA7kEdq0jgTGSSeIPI9BVcy5TXqJOaLMgAhATgcYHpQECMDk8GGjkODpG4H5aJMCLsJMejiQopY5J/ERv8/wDtTeBEZY8S8EAk1HSQO7flU7CseotJM6GirVeD6xywt0EwiYHOMqoPNVWBaDmMus/p8bRDDTIvhorvMx0ghsbn1o9RXs2kmL0twuDgD2/5lI3WOZJHKqXOhsbkZ2NZVpZlwD9p0LtWi2bnXn7zSWG4cOuBojfyFZDjUCBnjbc/rR1VBD9Zl1OtNnQxHp2uQcS6W8oUk4x7b9v0paVvvJQZAmkX1CoKW2sZy/X+qC9kSOLPhQpo1DhmPJ//AGttOEXb6Tmakm2zee5iBDg7/CmxBGO4eazngt45ZU8ky6oye49aoHJxIQQMxIt3FXJiWBqpc9n1zUkk87Ln51AJIaIeEmTuasn0g/Wdf9lIw/RXaQFh94yB8qFmU4Vx9f1h1JZkvW2PQ/aPdb6rCqqkT6hjw/IBv/z/ACaV5GPBwRDr3qeRkH9pg3N4jaoVVy+cEBe+aztp23b0xzzOlXrUKbLc59P59IpcQSBiGLK+MkE8fGtaDYoXP7znWlbXLgH8RNrl4yUXAAPGP1ot5A4MA1qfmEvDPrb+ogbfeq8QAZMIUljhYbSGUODkAnPtTEvY/WZ7tIi5XGIvKWUEpj50bOxikrrEXdssNu+9ZyuTzNy2YXgwMslVjmXuwIAksR2ojAxJx71WZMSic0UGFz6VIWJaNtLajkj2olbBzFuu5cRqK4ZpPK+nsu2aFmJlqgWMpgzoImEmQAuukHkczTWwUx6GSQt4erDDIGp8YI7UroEx7sDxjuGtVwzLFrMikqQwGAQRjccjmj1LblXMVo/I7gRa7hEF4xdcb6igNHSQwGIq3duOeZoWV4y2bXwjZ40OifJ7Y2I+uPpRY8+0H0isjA3epmd1brr36mKCIQxvtJvvIO2aFdwXBMewTduUcwXSLKK5u0+8SFYgcMRjn09qatTMN3pEPaqHYO51b9E6W91GyWuR+HUhOnj09cUOo2115B5i9G1j24ImB9rkaGeKFiD5SRtjbPf3pNDg8rNl4JPm7nMHY1rBmaSpqpJbvipJLg7VMySQS5xnHvUEozsfszFM/SHkh/0/GK+2wFNr1FaeVhzM1+mtsOVOAO5Tq8lpHPAzyMVzh9KY/wC9JvqUngYP6zVpL7EXG7K/pxA3Sw+OLq3OgY2JI2+VDgt35ftDDrWOBv8Av5f+4neTmQ5nwzt/fioy2IQexGCym1SPkYen+ZnPb5yWffOcaeaWzMp5EYiq/KtKLGEbdvxHGccUDMWXqNRVVjzGZUFvI8JfUy7g+oIzTdO4ZBMuqU78wA1kYI5rajA8mc21COB6wUi4IKgn1xQW4PIjKQR5TFJVZPNpJU0kzTKYyaAxijmTihhygGO9NiZYHHJoTGA4ELEd8MpINQ8Sdxy2kEQwAMCiFrKOBFWaVH7MlZCX1Ergn0xmlNYT3NNVCqvE07GS2laIXClnGcbkHNUowRj1i7S5Un26j8tvqk8R8J5TgjAYH39aG8+UACL04OTzmAC2zqNbgl23V8qntqHYk96QWYHibAi7SxgZbdbDMJDBnGl1ByGG+xxx7GnLZ4gzEFCsSPS5yuu2XxUOSDkbfH9qLeAcGQfSbHTeixwOl3b9QlYg7qsYUhhyrZ4rRRc+QMYmTUopU89ek2EvEiDQyBCz6tAXBXI3y3xxzVfEayKyVHGJPhFoNo3nOD/PvOZ+1UvjX3lxpRAqgHIxWDRLivn1nU1v/wCuPac8RvW6YiJA253q8wcQiEHAByfQ1fco8SWBHORVSS6DbAGTVgZkJxNGwmng0qjMipuQDjJq2QbwxHIlLYzVNWpwDNGW7Hg+LNFgDGxH7V0TqlK5InGHw98hUaL3EqynSGXCj8w3+FYH1VdjccTqV6G7Trg+bMUllcYGtG9OCRTVv3DES2kKHLAiQsrs4SUgjscYNL2DdtaP8Rgm6sSk5QbA/Ko4QDAl1mwncxnnxMTOThUQDJ/ubjA/SsoYKcATUULQHjMDg7EbkU4NM7JiBa5l1FUbY9j2qieYQHEHJI7KAxOnOanJhACVHtQGMBnqrELIlKZEGeGB8arEvdxiF1Fm9AOBVMY1OIQEfWhziFjJlwwB+VLPMcnEZjMiqJUIyvrTUDdzPcyDj3jcfU4yoEurPqp4Pzo7WyOJlppK9nqO2k8Utt4XghpSuhQ34G/nv/zFc91O7OeJ0FIwBNZLaBrd5ZmYZAB1jGMcdvofrSxYcjEMg9RCdmiDSQorBxlo24ZR3z25/StfYGZn3YbiDF4U1spBBwV205I4z8P1FGrMq7QYooC+7E9b9WjGS66tRyxB3BxyBxity3L03M59mlYnKHEyupTNcytKMb7DNZbHDWEgTdShSsKTk+8yW2NSFPA1RlycbVWZMSElZds/WmBosrGYrhQMFNJ/MN6YLAIs157nQ9BliMDwugZj5nJ7em9FXevGZnv01wO6s/TEy7kM7kSOxjDkgYxhexrO9itkzoVUuAAw6EXldgxAJY9g3OPXNL8PMeLyPKZEZ8h8Ty+nvRL5DnEFj4i4zByXAC4XfB2NM3ZmfbiBZiWBznNDD7hY30urctnygnbNARniGMrzIlYSuiKwyM6m9TyateIJIMWA04zvnfPrRiLJlpCCuDsKPPEALzmCDYGBQRk9k1JINfxH0q5Uvq7VMySwaqxzD3cYhoDEXVnyAOfej8uYrz+8tclfGZY1wF2G9CygHiMVyRzLjxsImogN2FADiMwW4M9boHm0KON8Y3qN1BXvEaKmK4ZMhlyM+lB/tzGf78TfsWku7d44bnzhQFDfl9DWCzCtkiaFHG3Ma8F7uIEKcqSrhVyue4zzz+1UbWX5oQqrbgRJ+lXKwFpzoRF1Z14+uKbXqAzYEGyhVXOYjcpbJra18jBcYBzzW6wqAOZjoDkkFZnyvqB17P8A3D3oIR44iEnNMECQvFCZBCDaqhiDDDO4BHoaLBxF594aEr4i7Y3oGziMTGZqWqSsJDErEBRnTtQK6gYbuE4YNuWElzqlNwCpXJ04BK+1HsQjAkW2wEHOfxE7tomjQxaiV5yMYoxuxiLYqWzkn9osC1zhCCcd6s7sZkBrzjoy80EUYOcgZ2q8esAnsRYw8+bbkZqwuZTHABkupECSatmJBHuKUD5iI48qIJThwRTRgxLSxwMDP4aLAgZJ7lWBfPwyKEwgIMpgZFSXIzVS5RTntVypcA+lDGY4njsauCYSLdgDv8avOIJGZdv6Z0nAIqZzLxiELMyjB3AzQgAwixxL27qsqyEDIOT7mlupIMfWRkZjMmokOo5PJPNCucYhOBnIlvvMlvIv4k7bfvQ7dwl7wvBmvZ3l9P5rd0ABIfsd6QyVKfMJAbM8GDuJZ43WO7uDOqrkqdwR8fWrVQR5VxDz7mKzfd0AljdSj7afyiiAc8EQtyZBzMydhrbGTvz61pUcTG58xijHejgSy80MuEY4QmhHcI9RfuKbFS4YjzDkb0B54hzUjlLRKFcqdskHG1JRMvgx7PtTcJS5bA1OC+eAe9aiCBiZfKfMBjMCCG2AG9UG9JbKe5dw8baiuARz3pquOog1k8mClcyAZY4pZJjFAxBsdORnO2Kgk7g8s6iNd8HIFVxnMPmUDAN64qCDJJBbVRSvSVMrh+MCoe5B1JZwFIoT3LEFqFSXPJzVyocHJyaodw26kNVtKT1lf7xVmDGCNdqrvu2SM0o94h+khxiCNhyWxTBKaXtVBmYEbVY7EAkx6Rir6QdgRj2pr/KYmkZwTGLxiLKd8+YDYntWBR5hNx+UmK2M0iRqVkYFlGcHmtdNSMxyJmuscKOY4WOq434OR7b0QUBYku3v6RVEQvcgqMKoK+1ZbiQeJu0/I5mfP/qH4CrXqCezAHmjlS1VLlpP9OqXuEeoFaMxcuOD8KH1l+kasyfu4P8A00tuGEcvyQs5JibPY7VpHyzM/wA08iKSNu1Z2+abF+WJoxE7LnYUwjHUR3xJUkjf8wqEwUHc9PtqI9akvHECdkyOTzVkQMyH/HjsBUEk8PxiilGEcA1cEQA3cZoTCEJpHpUkn//Z" alt=""/>
            </div> 

            <div id="form-wrapper" style={{width:"60% "}}class = " card p-2 ">

                <div className="text-center m-3" > 
                    <h1  style={{fontWeight:" bolder"}} >Basic Details</h1>
                </div>

                <form >
                    
                   
                    
                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label for="inputEmail4">Name of the Group/ Company,</label>
                        <input type="text" className="form-control" id="inputEmail4" placeholder=""/>
                      </div>

                      <div className="form-group col-md-6">
                        <label for="inputPassword4">Your Name</label>
                        <input type="text" className="form-control" id="inputPassword4" placeholder="Password"/>
                      </div>

                    </div>
                    
                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label for="inputAddress">Address</label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St"/>
                      </div>

                      <div className="form-group col-md-6">
                        <label for="inputAddress2">Age</label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder=""/>
  
                      </div>

                    </div>

                    <div className="form-row">

                      <div className="form-group col-md-6">
                        <label for="exampleFormControlSelect1">Gender</label>
                        <select className="form-control" id="exampleFormControlSelect1">
                          <option>Male</option>
                          <option>Female</option>
                          <option>TransGender</option>
                          <option>Any other</option>
                        </select>
                      </div>

                      <div className="form-group col-md-6">
                       
                        <label for="inputState">State</label>
                        <select id="inputState" className="form-control">
                          <option selected>Choose...</option>
                          <option>Uttar-Pradesh</option>
                          <option></option>
                        </select>
                      </div>

                    </div>



                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">Mobile No</label>
                        <input type="text" className="form-control" id="inputCity"/>
                      </div>
                      
                      <div className="form-group col-md-6">
                        <label for="inputZip">Email-id</label>
                        <input type="e-mail" className="form-control" id="inputZip"/>
                      </div>
                    </div>

                    <div className="form-group">
                     
                      <label className="form-check-label" for="gridCheck">
                        Language Known
                      </label>
                      <input type="e-mail" className="form-control" id="inputZip"/>
                    </div>


                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">Id-Proof</label>
                        <input type="text" className="form-control" id="inputCity"/>
                      </div>
                      
                      <div className="form-group col-md-6">
                        <label for="inputZip">Address-proof</label>
                        <input type="e-mail" className="form-control" id="inputZip"/>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">Caste</label>
                        <input type="text" className="form-control" id="inputCity"/>
                      </div>
                      
                      <div className="form-group col-md-6">
                        <label for="inputZip">Religion</label>
                        <input type="e-mail" className="form-control" id="inputZip"/>
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">Height</label>
                        <input type="text" className="form-control" id="inputCity"/>
                      </div>
                      
                      <div className="form-group col-md-6">
                        <label for="inputZip">Weight</label>
                        <input type="e-mail" className="form-control" id="inputZip"/>
                      </div>
                    </div>

                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label for="inputCity">Highest-Education</label>
                        <input type="text" className="form-control" id="inputCity"/>
                      </div>
                      
                      <div className="form-group col-md-6">
                        <label for="inputZip">Total - Experience</label>
                        <input type="e-mail" className="form-control" id="inputZip"/>
                      </div>
                    </div>



                    <div className="form-group">
                      <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" for="gridCheck">
                          Check me out
                        </label>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-danger btn-new" >Sign in</button>
                  </form>

            </div>
        </div>

    </div>

</div>
   

      </div>
    )
  }
}

export default Artist_registration
