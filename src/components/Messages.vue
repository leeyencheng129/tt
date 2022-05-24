<template>
  <div class="messages">
    <!-- Header -->
    <el-row>
      <el-col :xs="2" :sm="2" :md="2" :lg="2" :xl="2">
        <el-button @click="goBack()" class="back_button" type="danger" circle icon="el-icon-d-arrow-left"></el-button>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <h1 style="margin-left: 50px">Messages</h1>
      </el-col>
    </el-row>

    <!-- Content -->
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="20" :md="16" :lg="12" :xl="12">
        <div class="block" style="overflow:auto; min-height: 70vh">

          <loading :active="loaderLoading" :is-full-page="loaderFullPage" :background-color="backgroundColor" :color="loaderColor" :opacity="loaderOpacity" :height="loaderHeight" :width="loaderWidth" :loader="loaderStyle"></loading>

          <transition name="el-zoom-in-bottom">
            <el-timeline class="messages_timeline" v-show="showTimeline">

              <el-timeline-item>
                <el-card>
                  <video controls autoplay muted loop width="100%">
                    <source :src="Video" type="video/mp4">
                  </video>
                  <h4>還記得這裡嗎？最近的天氣真的很糟，能看到這樣的美景實屬難得！</h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <el-image :src="img1" @load="onImgLoad"></el-image>
                  <h4>日落餘暉很快地將天空渲染成滿天霞紅，就跟我看到你臉紅一樣</h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <el-image :src="img2" @load="onImgLoad"></el-image>
                  <h4>第一張合照，陽光耀眼奪目，太熱了還把椅子轉向😂<br>
                    前一天還因為太興奮沒有睡好
                  </h4>
                </el-card>
              </el-timeline-item>
              <el-timeline-item>
                <el-card>
                  <el-image :src="img6" @load="onImgLoad"></el-image>
                  <h4>純愛戰士！五條老師還是一樣厲害。<br>
                    在電影的最後牽起你的手，真的好緊張...最後還去逛了夜市，然後你開車送我回家。<br>
                    很久沒有人送我回家了，那種感覺很溫暖❤️ 謝謝你
                  </h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <el-image :src="img3" @load="onImgLoad"></el-image>
                  <h4>吃完萬客後河堤散步。三月吃了三次鍋，果然還是萬客最好吃！！</h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <el-image :src="img4" @load="onImgLoad"></el-image>
                  <h4>那天問你30歲是什麼感覺啊？<br>
                    「與別人比較永遠比不完，只要自己有持續進步就好」<br>
                    對未來感到迷茫的我內心變得平靜許多，而我也朝著目標努力中
                  </h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <el-image :src="img5" @load="onImgLoad"></el-image>
                  <h4>殭屍汪達😂 (有這麼恐怖嗎？)<br>我真的沒想到位置會被取消，拍謝啊。好開心你也喜歡漫威的電影，不過你愛的是驚奇隊長
                  </h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <h4>
                    儘管我們的相遇是這麼的奇妙，我還是覺得自己很幸運可以遇見你。偷偷告訴你一個小秘密，去年我有去拜月老，而你跟上面的描述幾乎吻合。

                  </h4>
                  <h4>我不是很迷信的人，但此刻我很慶幸你有向我發訊息。(感謝蝦皮跟月老？)在我跟你說想要戴牙套、磨小門牙，抑或是體脂25%很油，你都覺得這樣很好很可愛，儘管你可能只是隨便說說的也給我增加很多自信</h4>
                  <h4>很喜歡跟你相處時候的自己，因為可以舒服的做自己，很輕鬆、自在。好像有什麼喜怒哀樂都可以跟你説，如果你願意的話有什麼事也可以跟我分享，我也是個很好的傾聽者的</h4>
                  <h4>未來再去更多地方走走拍照吧！</h4>
                </el-card>
              </el-timeline-item>

              <el-timeline-item>
                <el-card>
                  <h4>最後，獻上我最真誠的祝福，<br>願你天天開心，心想事成<br>
                  <span style="font-size:10px;text-align:right;display:block;font-style:italic">by ian 2022.05.30</span>
                  </h4>
                </el-card>
              </el-timeline-item>

            </el-timeline>
          </transition>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// Loading effect component
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

import img1 from '../assets/img_01.jpg'
import img2 from '../assets/img_02.jpg'
import img3 from '../assets/img_03.jpg'
import img4 from '../assets/img_04.jpg'
import img5 from '../assets/img_05.jpg'
import img6 from '../assets/img_06.jpg'

export default {
  name: 'Messages',
  data() {
    return {
      // Display Timeline
      showTimeline: false,
      // Images
      // TODO : Modify the variables to cooperate with your images
      img1: img1,
      img2: img2,
      img3: img3,
      img4: img4,
      img5: img5,
      img6: img6,
      Video: require('../assets/video.mp4'),
      imagesLoaded: 0,

      totalImages: 5,
      // Loader
      loaderLoading: true,
      backgroundColor: '#2d2929',
      loaderColor: '#d4af37',
      loaderOpacity: 1,
      loaderStyle: 'dots',
      loaderHeight: 60,
      loaderWidth: 60,
      loaderFullPage: false
    }
  },
  components: {
    Loading
  },
  methods: {
    goBack() {
      this.$router.go(-1)
    },
    onImgLoad() {
      this.imagesLoaded += 1
      if (this.imagesLoaded === this.totalImages) {
        console.log('Images Loaded')
        setTimeout(() => (this.loaderLoading = false), 500)
        setTimeout(() => (this.showTimeline = true), 800)
      }
    }
  }
}
</script>

<style scoped>
.messages_timeline {
  width: 80%;
  height: 83vh;
  margin-left: auto;
  margin-right: auto;
}

.back_button {
  margin-top: 15px;
  position: absolute;
}
.el-card {
  background: #2d2929;
  border: 1px solid #ebeef533;
}
::v-deep .el-card__body {
  padding: 2vw;
}
h4 {
  color: #fff;
  text-align: left;
  width: 90%;
  margin: 5vw auto;
}
::v-deep.messages_timeline {
  padding-top: 2vw;
}
</style>
