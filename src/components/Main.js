import profilEdit from '../images/profile_edit.svg';
import iconEdit from '../images/icon_edit.svg';
import iconAdd from '../images/icon_add.svg';
import EditProfilePopup from './EditProfilePopup';
import {useContext, useState} from 'react';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import Card from './Card';
import CurrentUserContext from '../contexts/CurrentUserContext';

function HandleEditProfileClick({nama, title, setUserData}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className='profile__icon' onClick={openModal}>
        <img src={iconEdit} alt='edit akun' />
      </button>
      <EditProfilePopup
        isOpen={modalOpen}
        onClose={closeModal}
        nama={nama}
        title={title}
        setUserData={setUserData}
      />
    </>
  );
}

function HandleCreateNewCardClick({setCardData}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button className='profile__button' onClick={openModal}>
        <img src={iconAdd} alt='tambah' />
      </button>
      <AddPlacePopup
        isOpen={modalOpen}
        onClose={closeModal}
        setCardData={setCardData}
      />
    </>
  );
}

function HandleChangeAvatarClick({avatar, setUserData}) {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className='profile__image'>
      <img className='profile__image-src' src={avatar} alt='profile' />
      <div className='edit-icon'>
        <button className='profile__icon' onClick={openModal}>
          <img src={profilEdit} alt='edit' />
        </button>
      </div>
      <EditAvatarPopup
        isOpen={modalOpen}
        onClose={closeModal}
        setUserData={setUserData}
      />
    </div>
  );
}

function Main({cardData, setCardData}) {
  const {nama, title, avatar, setCurrentUser} = useContext(CurrentUserContext);

  return (
    <main>
      <section className='profile'>
        <div className='profile__container'>
          <HandleChangeAvatarClick
            avatar={avatar ? avatar : '#'}
            setUserData={setCurrentUser}
          />
          <div className='profile__info'>
            <div className='profile__name-container'>
              <h1 className='profile__name'>{nama ? nama : '....'}</h1>
              <HandleEditProfileClick
                nama={nama}
                title={title}
                setUserData={setCurrentUser}
              />
            </div>
            <p className='profile__title'>{title ? title : '....'}</p>
          </div>
          <HandleCreateNewCardClick setCardData={setCardData} />
        </div>
      </section>
      <section className='card'>
        <div className='card__container'>
          {/* loop */}
          {cardData.map((card) => (
            <Card
              key={card._id}
              link={card.link}
              name={card.name}
              likes={card.likes}
              card_id={card._id}
              owner_id={card.owner._id}
              setCardData={setCardData}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
