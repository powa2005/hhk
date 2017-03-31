<template>
  <div id="app" class="">
    <transition name="fade2">
    <div class="loading" v-if="isLoading">
      <div class="cutdown">
        <div class="cutdown-bg rotate"></div>
        <span class="cutdown-num zoomout">3</span>
      </div>
    </div>
    </transition>
    <transition name="fade">
      <div class="flex app win-main" v-if="!isLoading">
        <header class="flex-item win-header">
          <img class="win-logo" src="./assets/logo.png" />
          好好看故事会
        </header>
        <section class="flex-item flex win-wrapper">
          <aside class="flex-item win-aside">
            <ul class="story-title-list">
              <li v-for="(item, i) in titlelist" @click="clicktitle(i)">{{item.title}}</li>
            </ul>
          </aside>
          <article class="flex-item win-content">
            <!-- <welcome></welcome> -->
            <div v-html="article" class="story-article"></div>
          </article>
        </section>
        <footer class="flex-item win-footer">© copyright 2017</footer>
      </div>
      
    </transition>
  </div>
</template>

<script>

import welcome from './view/welcome.vue';
import { mapGetters, mapState } from 'vuex'
export default {
  name: 'app',
  data () {
    return {
      isLoading: true
    }
  },
  computed: mapState({
      titlelist: state => state.story.titlelist, 
      article: state => state.story.article, 
  }),
  components:{
    welcome: welcome
  },
  methods:{
    clicktitle (i){
      this.$store.dispatch('clickTitle',this.titlelist[i].id)
    }
  },
  mounted () {
      const $this = this;
      let $cutdownBg = document.querySelector('.cutdown-bg');
      let $cutdownNum = document.querySelector('.cutdown-num');
      let cutdown = 3;
      $cutdownBg.addEventListener('animationend', () => {
        $cutdownBg.className = $cutdownBg.className.replace('rotate', '');
        $cutdownNum.className = $cutdownNum.className.replace('zoomout', '');
        setTimeout(function(){
          if(cutdown < 2) {
            $this.isLoading = false;
            return;
          }
          cutdown --;
          $cutdownNum.innerText = cutdown;
          $cutdownBg.className += ' rotate';
          $cutdownNum.className += ' zoomout';
        })
      });
  }
}
</script>

<style>

@keyframes rotate{
  0%{transform:rotate(0deg) ;}
  100%{transform:rotate(360deg) ;}
}

@keyframes zoomout{
  0%{opacity:1;transform:scale(0.9) ;}
  100%{opacity:1;transform:scale(1.2) ;}
}
html,body{width: 100%;height: 100%;margin:0;padding: 0;}
#app {font-family: 'Avenir', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; text-align: center; color: #2c3e50; height: 100%;}

h1, h2 {font-weight: normal; }

ul {list-style-type: none; padding: 0; }

a {color: #42b983; }

.flex{display: -webkit-flex; display: flex; }
.flex-item{flex-grow: 1; }

.app{flex-direction: column;height: 100%}

.loading{position: absolute; width: 100%; height: 100%; background: #eee;}




.cutdown{width: 200px;height:200px;    position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);}
.cutdown-bg{position: absolute;width: 100%;height: 100%;border-top:5px solid #f00;border-radius: 100px;border-bottom: 5px solid orange;}
.cutdown-num{font-size: 80px;color: #333;font-weight: bold;position: absolute;top:0;left:0;z-index: 1;line-height: 200px;text-align: center;width: 100%;}
.cutdown-bg.rotate{animation:rotate 1s linear none;}
.cutdown-num.zoomout{animation:zoomout 1s linear none;}

.win-header{height: 60px;background: #03A9F4;flex-grow: 1;text-align: left;text-indent: 10px;color:#fff;line-height: 60px;}
.win-logo{height: 80%;margin:0 10px;vertical-align: middle;}
.win-footer{height: 30px;background: #eee;flex-grow: 1;color:#333;line-height: 30px;font-size: 12px;}

.win-wrapper{flex-grow: 50;height: 100%;}
.win-aside{height: 100%;;width: 300px;border-right: 1px solid #ccc;overflow-y:auto;}
.win-content{width: 100%;;height: 100%;flex-grow: 3;overflow-y:auto;}

.story-title-list li{height: 26px;line-height: 26px;text-align: left;padding-left: 10px;cursor: pointer;transition:padding 0.2s linear 0s;}
.story-title-list li.active, .story-title-list li:hover{background: #03A9F4;padding-left:15px;color:#fff;}

.story-article{text-align: left;padding:15px 25px 30px;}


.fade2-enter-active, .fade2-leave-active {
  transition: transform .3s
}
.fade2-enter, .fade2-leave-active {
  transform:translateY(-100%);
}
.fade-enter-active, .fade-leave-active {
  transition: transform .3s
}
.fade-enter, .fade-leave-active {
  transform:translateY(100%);
}
</style>
