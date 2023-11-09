import React, { useState } from 'react';
import './User.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faSearch, faComment, faBell,faUsers } from '@fortawesome/free-solid-svg-icons';
import { faPencil } from '@fortawesome/free-solid-svg-icons';




function User() {
    const [profileImage, setProfileImage] = React.useState(null);


    function handleImageUpload(event) {
        const selectedImage = event.target.files[0];
        setProfileImage(selectedImage);
      }
      
  const [isEditing, setIsEditing] = useState(false);
  const [userProfile, setUserProfile] = useState({
    coverPhoto: './couverture.jpg',
    profilePhoto: './background.jpeg',
    bio: 'Ma bio personnelle',
    birthYear: 1990,
    firstName: 'Prénom',
    lastName: 'Nom',
  });

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
  <>
     <nav className="navbar">
        <div className="group">
      <FontAwesomeIcon icon={faSearch} className="icon" />
      <input type="search" className="input" placeholder="Search" />
    </div>
      <ul className="navbar-menu">
      
        
        <li className="navbar-item">
          <a href="#"><FontAwesomeIcon icon={faBell} className='bell' /></a>
        </li>
        <li className="navbar-item">
          <a href="#"><FontAwesomeIcon icon={faComment} className='conv' /></a>
        </li>
        <li className="navbar-item">
          <a href="#"><FontAwesomeIcon icon={faUsers} /></a>
        </li>
       
      </ul>
    </nav>
    <div className="user-profile">
       
      
       <div className="cover-photo">
          <img className='image' src={userProfile.coverPhoto} alt="Photo de couverture" />
        </div>
        <div className="profile-container">
        
        
          {isEditing ? (
            <div className="edit-form">
               <input
                type="text"
                name="firstName"
                value={userProfile.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                value={userProfile.lastName}
                onChange={handleChange}
              />
            
              <input
                type="text"
                name="bio"
                value={userProfile.bio}
                onChange={handleChange}
              />
              <input
                type="number"
                name="birthYear"
                value={userProfile.birthYear}
                onChange={handleChange}
              />
             
            </div>
          ) : (
            <div className="profile-info">
              <div className="profile-photo">
        <label className="circle-input">
                        <input type="file" accept="image/*" onChange={handleImageUpload} />
                        <span>Choose Profile Picture</span>
                        <i className="fas fa-camera"></i>
                        {profileImage && (
                            <img
                            src={URL.createObjectURL(profileImage)}
                            alt="Profile Image"
                            />
                        )}
                    </label>
        </div>
               <p className='nom_prenom'>
                  {userProfile.firstName} {userProfile.lastName}
              </p>
              <p className='bio'>{userProfile.bio}</p>
            
             
            </div>
          )}
        </div>
        <button  onClick={handleEditClick} className="Btn">Edit  {isEditing ? <FontAwesomeIcon className='icone' icon={faPencil} />:<FontAwesomeIcon className='icone' icon={faPencil} />}</button>
        <hr />
        <nav className="navbar1">
      <ul className="navbar-menu2">
        <li className="navbar-item">
          <a href="#clubs">Clubs</a>
        </li>
        <li className="navbar-item">
          <a href="#cells">Cells</a>
        </li>
        <li className="navbar-item">
          <a href="#tasks">Tasks</a>
        </li>
       
      </ul>
    </nav>

    <div id='clubs' className='container-card'>
      <div className='card1'>
        <h1 className='title'>You are member of :</h1>
        <ol>
          <li><p className='nom-club'> club <a href="#">name1</a></p></li>
          <br />
          <li> <p className='nom-club'> club <a href="#">name2</a></p></li>
        </ol>
       
      </div>
      

    </div>
    <div id='cells' className='container-cells'>
      <div className='cell'>
        <h1 className='title'>You are member of cell(s) :</h1>
        <ol>
          <li><p className='nom-cell'> Cell <a href="#">logitics <FontAwesomeIcon icon={faComment} className='conv' /></a></p>
          </li>
          <br />
          <li>
          <p className='nom-cell'> Cell <a href="#">formation <FontAwesomeIcon icon={faComment} className='conv' /></a></p> 
          </li>
        </ol>
        
      </div>
    </div>
    <div id='tasks' className='container-tasks'>
     
        <div className='card'>
          <h1 className='title'>your tasks :</h1>
          <div className='task'>
            <label className="cl-checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span></span>
            </label>
            <p className='task-cell'>task1 for cell: cellname( clubName )</p> 
          </div>
           <div className='task'>
            <label className="cl-checkbox">
              <input
                type="checkbox"
                checked={isChecked}
                onChange={handleCheckboxChange}
              />
              <span></span>
            </label>
            <p className='task-cell'>task1 for cell: cellname( clubName )</p> 
          </div>
          
        </div>
     
      </div>
    
      
  </div>
  <footer>
    <div>footer</div>
  </footer>
</>
   
  );
}

export default User;
