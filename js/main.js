import sideBarFun from './sidebar.js';
import featuredSpeaker from './featured.js';

const allSpeaks = document.querySelector('.allSpeaks');
sideBarFun();

featuredSpeaker.forEach((i) => {
  allSpeaks.innerHTML += `
    <div class="col-sm-6 mb-5">
      <div class="row">
        <div class="col-lg-4 col-5">
          <div class="chess_board">
            <img src="${i.chessboard}" alt="">
          </div>
          <div class="image-url">
            <img src="${i.img}" width="100%" alt="Speakers Image">
          </div>
        </div>
        <div class="col-lg-8 col-7 pt-3">
          <h3 class="fw-bold-x">${i.fullname}</h3>
          <p class="small-text text-orange m-0">
            ${i.text}
          </p>
          <div class="small-text-hr my-2"></div>
          <p class="small-text m-0">
            ${i.text2}
          </p>
        </div>
      </div>
    </div>
  `;
});
