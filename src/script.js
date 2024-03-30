new Vue({
  el: "#app",
  data() {
    return {
      audio: null,
      circleLeft: null,
      barWidth: null,
      duration: null,
      currentTime: null,
      isTimerPlaying: false,
      tracks: [
        {
          name: "Kannuladha..💓",
          artist: "Kannuladha Video | Dhanush, Shruti | Anirudh",
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG_CNI2T9eEgjVg16HBTVSMiGs07aM5FOl0MnGxO7b4PpWwSijOPXVcq8kVrltmFSoTVI&usqp=CAU",
          source:
            "https://audio.jukehost.co.uk/CENBr1j4GDTFMuPDWISk0EJ0t10pIgJR",
          url: "https://www.youtube.com/watch?v=mLv0IV6zpAU",
          favorited: true
        },
        {
          name: "Ee Raathale..💞",
          artist:
            "Ee Raathale Song | Radhe Shyam | #Prabhas #PoojaHegde | Justin Prabhakaran | Krishna K",
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6pejWWOVmEqO58JBzqADhsMhq5-_u63nAkHrfCzfVTk5yTEWor38ltrSpE_jYFSU8UIs&usqp=CAU",
          source:
            "https://audio.jukehost.co.uk/xEu1P86jefgVCh5pPRYufufVH5IapNbi",
          url: "https://www.youtube.com/watch?v=b1_5YO11rmM",
          favorited: true
        },
        {
          name: "Vellake ❤️ ",
          artist:
            "Alekhya Harika | Vinay Shanmukh, Bharatt-Saurabh, Anirudh Ravichander, S Vijay",
          cover:
            "data:image/jpeg;base64,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",
          source:
            "https://audio.jukehost.co.uk/PS5pkCuHtjEsxFhIRDUFgnNPHIyHOGHO",
          url: "https://www.youtube.com/watch?v=rFPl2XY0uv4",
          favorited: true
        },
        {
          name: "Nuvvu Navvukuntu...🥰",
          artist: "| MAD | Kalyan Shankar | S. Naga Vamsi | Bheems Ceciroleo",
          cover:
            "https://content.tupaki.com/en/feeds/2023/09/26/162894-whatsappimage2023-09-26at42545pm.webp",
          source:
            "https://audio.jukehost.co.uk/NZchNGEnaI04A8sHY1fOLsb1EbQJENEV",
          url: "https://www.youtube.com/watch?v=Iju38nOI9cg",
          favorited: true
        },
        {
          name: "Galliyan",
          artist:
            "Ek Villain | Ankit Tiwari | Sidharth Malhotra | Shraddha Kapoor",
          cover: "https://i1.sndcdn.com/artworks-000123978072-coq5nd-large.jpg",
          source:
            "https://audio.jukehost.co.uk/q7lUzhY4AMj6lTYq4Ln7wI9UGFWiOsP3",
          url: "https://www.youtube.com/watch?v=FxAG_11PzCk",
          favorited: true
        },
        {
          name: "Undipova Nuvvila..",
          artist:
            " || Savaari movie Song || Shekar Chandra || Nandu, Priyanka Sharma",
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUwlnzOFkO8D0mkR0KK-Vv_Ob3A_X5tRN--tEimOXUWSmPY_AacMdo316uS8IbxayMOnI&usqp=CAU",
          source:
            "https://audio.jukehost.co.uk/wC2OREolOnUBigNLEjtO9YxRZVX38TsD",
          url: "https://www.youtube.com/watch?v=Pm77L5Loazc",
          favorited: true
        },

        {
          name: "Janiye",
          artist: "Vishal Mishra, Rashmeet Kaur",
          cover: "https://i.ytimg.com/vi/H1YR5rsScC8/maxresdefault.jpg",
          source:
            "https://audio.jukehost.co.uk/D2dnVv6smrYpLTlxUIR456obBW9a15Vm",
          url: "https://www.youtube.com/watch?v=H1YR5rsScC8",
          favorited: true
        },

        {
          name: "Hey Choosa",
          artist:
            " Bheeshma Movie | Nithiin, Rashmika| Venky Kudumula | Mahati Swara Sagar",
          cover:
            "https://static.toiimg.com/thumb/msid-74459678,width-1070,height-580,imgsize-159009,resizemode-6,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          source:
            "https://audio.jukehost.co.uk/QIc0C2JUvoh8xz8QbVWuaiGi7opzTHMt",
          url: "https://www.youtube.com/watch?v=MSez8vFUv3k",
          favorited: true
        },
        {
          name: "Nakhre",
          artist: "| Zack Knight |",
          cover:
            "https://v1daily.files.wordpress.com/2015/06/zack-knight-e28093-nakhre.jpg?w=1200",
          source:
            "https://audio.jukehost.co.uk/goc5dl8hV7Tg1aAQs2DyqHAKceRdCem1",
          url: "https://www.youtube.com/watch?v=vZAAHUT3RDU",
          favorited: true
        },
        {
          name: "PremeAakasamaithe..",
          artist: "|Ashish, Anupama|Devi Sri Prasad|Harsha Konuganti|Dil Raju",
          cover:
            "data:image/jpeg;base64,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",
          source:
            "https://audio.jukehost.co.uk/bWlw8MEVEXc9FdbQiG09Mue3ZRhm2ZYQ",
          url: "https://www.youtube.com/watch?v=UBR-GsWCI7E",
          favorited: true
        },

        {
          name: "Manjha 🪁",
          artist:
            "Aayush Sharma & Saiee M Manjrekar | Vishal Mishra | Riyaz Aly | Anshul Garg",
          cover:
            "https://1.bp.blogspot.com/-SEERvpBQQ1E/XnBTT-y-qKI/AAAAAAAAA4s/6I-q-HC971Uk4TENbHpUMH8lpSFG3-OdgCNcBGAsYHQ/s1600/Manjha%2BLyrics.jpg",
          source:
            "https://audio.jukehost.co.uk/CKRvpksHjnopWMGi9HHt5ohSv0HPFYon",
          url: "https://www.youtube.com/watch?app=desktop&v=gzmXpwF_MK4",
          favorited: true
        },

        {
          name: "Parayuvaan",
          artist: " Shane Nigam | Jakes Bejoy | Sid Sriram | Anuraj |E4E",
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmc0siG7Y6OLEifY1FB57LjBKoXQzs9KTMQusbDN4qotc2eiieVuhtCYlrsu2PWskJ7G4&usqp=CAU",
          source:
            "https://audio.jukehost.co.uk/r50eJkV0WikY5JxMYqOCyKcGsUFYgzbS",
          url: "https://www.youtube.com/watch?v=OvNBm3Lpu-Q",
          favorited: false
        },
        {
          name: "Hoyna Hoyna",
          artist: " | Nani | Anirudh | Vikram K Kumar",
          cover: "https://www.andhrawishesh.com/hwdvideos/thumbs/l_tp-9683.jpg",
          source:
            "https://audio.jukehost.co.uk/UFoDGguKRasanCpOQTHim2avCIE6UfqY",
          url: "https://www.youtube.com/watch?v=tYxlLM-ETao",
          favorited: false
        },

        {
          name: "Heeriya",
          artist:
            "Jasleen Royal ft Arijit Singh| Dulquer Salmaan| Aditya Sharma |Taani Tanvir",
          cover:
            "https://dtnext-prod.s3.ap-south-1.amazonaws.com/h-upload/2023/07/25/750x450_751607-nation.webp",
          source:
            "https://audio.jukehost.co.uk/ZxNEZJXZOlAU5Vg5petaBo8rcoZtNEL0",
          url: "https://www.youtube.com/watch?v=RLzC55ai0eo",
          favorited: true
        },
        {
          name: "Ishq",
          artist: "|| Ishq Movie || Nitin || Nithya Menon || Anup Rubens",
          cover:
            "https://movie.webindia123.com/movie/2011/Regional/April/Ishq/still/Ishq7.jpg",
          source:
            "https://audio.jukehost.co.uk/0uTtFjSboXLEJFUMllmbHtvhSLwB4ZNt",
          url: "https://www.youtube.com/watch?v=291X-45t83A",
          favorited: false
        },
        {
          name: "Pehle Bhi Main",
          artist:
            "Ranbir Kapoor,Tripti Dimri |Sandeep V |Vishal M,Raj S |Bhushan K",
          cover:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6TRHdWHFyc0WD-C_b7-xKcfbHDrHXEs77noVB7Kw-Zh6YZvIB_Wuz_xYhpC8_hboTSdk&usqp=CAU",
          source:
            "https://audio.jukehost.co.uk/PDQwhfsCKwcsm603lXdelTgrXnOYJhIg",
          url: "https://www.youtube.com/watch?v=iAIBF2ngbWY",
          favorited: false
        },
        {
          name: "Bae",
          artist:
            "Sivakarthikeyan, Priyanka Mohan | Anirudh Ravichander | Cibi Chakaravarthi",
          cover:
            "data:image/jpeg;base64,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",
          source:
            "https://audio.jukehost.co.uk/5TyYJyXo7qem0OROiIOIBMhrCWfHVTxV",
          url: "https://www.youtube.com/watch?v=w7Fjxf62t8E",
          favorited: true
        },
        {
          name: "Darshana",
          artist: "Hridayam | Pranav | Darshana | Vineeth | Hesham | Merryland",
          cover:
            "https://i.pinimg.com/originals/eb/1a/4d/eb1a4d1b9c31374bf69e070d49ff6063.jpg",
          source:
            "https://audio.jukehost.co.uk/fw8BWbCIhSlXUFxiOu3aGm0AbnP2xWUY",
          url: "https://www.youtube.com/watch?v=epAFDEJImrU",
          favorited: false
        },
        {
          name: "Chellaya",
          artist:
            "Shah Rukh Khan | Nayanthara | Atlee | Anirudh | Arijit S, Shilpa R",
          cover:
            "data:image/jpeg;base64,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",
          source:
            "https://audio.jukehost.co.uk/ES7BGnBgyLwMGAl5LMwio6iyU5TDoffl",
          url: "https://www.youtube.com/watch?app=desktop&v=wr9M-CoxP7A",
          favorited: false
        },
        {
          name: "Bekhayali..!",
          artist:
            " Kabir Singh | Shahid K,Kiara A|Sandeep Reddy Vanga | Sachet-Parampara | Irshad",
          cover:
            "data:image/jpeg;base64,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",
          source:
            "https://audio.jukehost.co.uk/HZBZhOjbLlynOq6tbya1rb8I1jvL50VV",
          url: "https://www.youtube.com/watch?v=VOLKJJvfAbg",
          favorited: false
        }
      ],
      currentTrack: null,
      currentTrackIndex: 0,
      transitionName: null
    };
  },
  methods: {
    play() {
      if (this.audio.paused) {
        this.audio.play();
        this.isTimerPlaying = true;
      } else {
        this.audio.pause();
        this.isTimerPlaying = false;
      }
    },
    generateTime() {
      let width = (100 / this.audio.duration) * this.audio.currentTime;
      this.barWidth = width + "%";
      this.circleLeft = width + "%";
      let durmin = Math.floor(this.audio.duration / 60);
      let dursec = Math.floor(this.audio.duration - durmin * 60);
      let curmin = Math.floor(this.audio.currentTime / 60);
      let cursec = Math.floor(this.audio.currentTime - curmin * 60);
      if (durmin < 10) {
        durmin = "0" + durmin;
      }
      if (dursec < 10) {
        dursec = "0" + dursec;
      }
      if (curmin < 10) {
        curmin = "0" + curmin;
      }
      if (cursec < 10) {
        cursec = "0" + cursec;
      }
      this.duration = durmin + ":" + dursec;
      this.currentTime = curmin + ":" + cursec;
    },
    updateBar(x) {
      let progress = this.$refs.progress;
      let maxduration = this.audio.duration;
      let position = x - progress.offsetLeft;
      let percentage = (100 * position) / progress.offsetWidth;
      if (percentage > 100) {
        percentage = 100;
      }
      if (percentage < 0) {
        percentage = 0;
      }
      this.barWidth = percentage + "%";
      this.circleLeft = percentage + "%";
      this.audio.currentTime = (maxduration * percentage) / 100;
      this.audio.play();
    },
    clickProgress(e) {
      this.isTimerPlaying = true;
      this.audio.pause();
      this.updateBar(e.pageX);
    },
    prevTrack() {
      this.transitionName = "scale-in";
      this.isShowCover = false;
      if (this.currentTrackIndex > 0) {
        this.currentTrackIndex--;
      } else {
        this.currentTrackIndex = this.tracks.length - 1;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    nextTrack() {
      this.transitionName = "scale-out";
      this.isShowCover = false;
      if (this.currentTrackIndex < this.tracks.length - 1) {
        this.currentTrackIndex++;
      } else {
        this.currentTrackIndex = 0;
      }
      this.currentTrack = this.tracks[this.currentTrackIndex];
      this.resetPlayer();
    },
    resetPlayer() {
      this.barWidth = 0;
      this.circleLeft = 0;
      this.audio.currentTime = 0;
      this.audio.src = this.currentTrack.source;
      setTimeout(() => {
        if (this.isTimerPlaying) {
          this.audio.play();
        } else {
          this.audio.pause();
        }
      }, 300);
    },
    favorite() {
      this.tracks[this.currentTrackIndex].favorited = !this.tracks[
        this.currentTrackIndex
      ].favorited;
    }
  },
  created() {
    let vm = this;
    this.currentTrack = this.tracks[0];
    this.audio = new Audio();
    this.audio.src = this.currentTrack.source;
    this.audio.ontimeupdate = function () {
      vm.generateTime();
    };
    this.audio.onloadedmetadata = function () {
      vm.generateTime();
    };
    this.audio.onended = function () {
      vm.nextTrack();
      this.isTimerPlaying = true;
    };

    // this is optional (for preload covers)
    for (let index = 0; index < this.tracks.length; index++) {
      const element = this.tracks[index];
      let link = document.createElement("link");
      link.rel = "prefetch";
      link.href = element.cover;
      link.as = "image";
      document.head.appendChild(link);
    }
  }
});
