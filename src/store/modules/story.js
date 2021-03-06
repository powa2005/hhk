import * as types from '../mutations'

// initial state
// shape: [{ id, quantity }]
const state = {
  titlelist: [{id: 1, title:'捡到一只小情兽', content: '<p> 楔子</p> <p> 深夜，一辆华贵的马车停在人迹罕至的野外，车厢剧烈地晃动着，发出“吱呀吱呀”的声响，以及断断续续的喘气声和呻吟声。</p> <p> 　　“疼……轻点……我疼……”</p> <p> 　　马车里头杂乱不堪，我骑在那男子的身上，一只手狠狠地掐着他的脖子，另一只手在他身上重重地打着，直到解恨了才放开他，喘着粗气骂道：“叫什么！有什么好叫的！”</p> <p> 　　终于呼吸到新鲜的空气，脸憋得通红的男子终于顺了气，开心地喊道：“主人……”</p> <p> 　　（一）江湖也有套路</p> <p> 　　自五年前上山后，这还是我第一次下山，心里既忐忑又期待。</p> <p> 　　流云山庄位于玉山山顶，如今师父年事已高，不久将要仙逝。他让我去山下百里开外一个叫“景言楼”的地方找楼主，只需问他一句：是否还记得当年对自己的承诺？</p> <p> 　　临行前，师父牵着一头二级小老虎来到我的屋子里，摸着我的头，接着递给我一个锦囊，道：“阿悔，若找不到楼主，实在没法子了，便打开锦囊瞧一瞧。”</p> <p> 　　我乖巧地点头，鼻子有些发酸，心中满是对师父的不舍。</p> <p> 　　“如今江湖习武之人都时兴养魔兽。”师父把小老虎放到我的怀里道，“你带着它下山，也不至于太寒酸。”</p> <p> 　　我点了点头，把小老虎抱紧，看着师父离去的背影眼眶瞬间红了。</p> <p> 　　五年前因患眼疾，我冒着生命危险准备上玉山。听说玉山上的流云山庄庄主，有着起死回生的本事，任何病痛对他来说都是小菜一碟。只要能活着见到他，包你药到病除。可这上山之路异常险恶，一路上设有重重迷障，十之八九会被困在其中不得而出，不是被野兽咬死，就是饿死在路上。所以，即使大家对流云山庄十分向往，却鲜少有人问津。</p> <p> 　　因为眼睛看不见，我的听觉和触觉变得异常灵敏，那一日我走了一上午，仍在原地徘徊。忽然听到不远处有男女对话之声，我分外欣喜，赶忙向二人问路。那女子许是心情极好，连声音都带着笑意，她告诉我上山的路径，我才得以顺利见到庄主。庄主不仅治好了我的眼疾，还收我为徒，教会我武功。</p> <p> 　　传闻中，师父武艺卓群，不是凡人可以比拟的。所以此次下山，我也想找人切磋一下，看看自己武艺到底如何。</p> <p> 　　第二日到山下时，已经快傍晚了，我加紧脚步往镇上赶，好在天黑前找个落脚的客栈。刚到城门外，就被人拦住了去路。</p> <p> 　　只见他器宇轩昂，一副翩翩佳公子的模样，看了看我身后的小老虎，道：“姑娘，想必你也是养魔兽之人，那必定懂这江湖的规矩。”</p> <p> 　　我点了点头。师父跟我讲过，如今江湖之人比武，喜欢拿魔兽做赌注，赢的人便有权力选择是否要用自己的魔兽来换对手的。极品魔兽可以助主人一臂之力，增强主人的武力，所以一些浪迹天涯的刀客侠士，虽然自己养不起极品魔兽，但若是看上了谁家的魔兽便向对方下战书，赢了比赛便可得到。</p> <p> 　　看他衣着考究精致，还把魔兽安放在马车上，想必一定不差。而我只有一只二级的小老虎，这笔买卖不吃亏！</p> <p> 　　“行，咱们就来比一场！”我拔出剑，准备先探探他虚实。</p> <p> 　　不料我只用了三成功力，便一剑刺穿了他的肩胛骨。他捂住伤口甘拜下风，眼神里却闪过一丝狡黠。当时的我被轻易得来的胜利冲昏了头脑，没有察觉到其中的异样。</p> <p> 　　他把魔兽连带着马车一起给我，垂头丧气地牵着我的小老虎离开了。</p> <p> 　　我兴奋得连蹦带跳，在掀开帘子的瞬间，惊呆了。这里头哪里有什么极品魔兽，只有一个傻乎乎的低等傀儡。</p> <p> 　　所谓傀儡，便是一个被取了魂魄的人。有人的行为意识，却没有为人时的记忆。如同行尸走肉，更不能在武艺上助主人一臂之力。</p> <p> 　　果然，在山上待得太久，我已经不知当今的世界如此险恶。</p> <p> 　　在马车里，我终于忍不住对这家伙动了粗。狠狠地将他暴揍了一顿后，我终于接受了这个事实，叹了口气，道：“我叫姜悔，你叫什么？”</p> <p> 　　“梅少卿。”他的声音倒是温润如泉水。</p> <p> 　　“好吧。我们先进城。”我驾着马车往城里赶去，心里盘算着在客栈里安顿下来以后的首要任务，便是找个有魔兽的人比试一场，把梅少卿换走！</p> <p> 　　（二）傀儡也撩妹</p> <p> 　　虽然男女授受不亲，但梅少卿只是傀儡，白送都没人要，若是给他另开一间房实在有些说不过去。好在他不会有异议，打着地铺凑合了一夜。</p> <p> 　　第二天我一觉睡到了晌午，感觉右臂上有些痒，缓缓地睁开眼睛就被吓了一跳。近在咫尺的一张脸，不是梅少卿是谁。</p> <p> 　　他托着腮蹲在床边，一下一下轻轻地戳着我的手臂，见我醒来，便傻笑起来，说道：“阿悔，你总算醒了。我肚子饿了，我们去外头吃饭好吗？”</p> <p> 　　吃吃吃，就知道吃！我这是养了个祖宗……</p> <p> 　　胡乱梳洗了一番后，我带着梅少卿上了街，一路上看见不少养魔兽之人，其中一人养着一只通体雪白的狐狸甚得我心。刚想上去攀谈，那人瞥见我身后的傀儡，大惊失色，抱起自家的白狐一溜烟跑了。</p> <p> 　　我回头看看梅少卿，他仍旧没心没肺地笑着，想必没有看懂刚才那人眼中对他的嫌弃。一路走着，街上养着魔兽的人纷纷避开我的视线，生怕我看上他家的魔兽提出比武的要求。一直到了街尾的酒肆，都没有成功把梅少卿换出去。 </p>'},
    {id: 2, title:'捕头大人长啥样', content:'<p> 一、来人，把姑娘给我请回去</p> <p> 　　十五的月儿圆又亮。</p> <p> 　　比那月儿更亮的，是京城翡翠客栈冲天的火光。</p> <p> 　　走水本来不是件稀奇的事儿，待火被扑灭后，人们却发现，翡翠客栈里的人，似乎一个都没出来。</p> <p> 　　事发突然，且有蹊跷。</p> <p> 　　于是，天机府的捕快们在三更半夜被他们英明神武的总捕头拎出了被窝。</p> <p> 　　“头儿，我们发现了这位姑娘，她说她是目击证人。”</p> <p> 　　一个捕快过来禀告，正在察看现场的段九楼闻言抬头，一双水灵灵的眸子与他撞了个正着。</p> <p> 　　段九楼轻咳一声，接着站起身吩咐其他人继续察看。</p> <p> 　　微微避开那双有些肆无忌惮的眼睛后，段九楼问道：“姑娘昨晚都看到了什么？”</p> <p> 　　“杀手，杀人，放火。”</p> <p> 　　“嗯……”段九楼一顿，“请再具体一点。”</p> <p> 　　“客栈所有房间都被锁了，是防止有人逃跑。不在房间的人，都在混乱中被杀，是为了不留活口。”</p> <p> 　　“分析得有道理。这是宁可错杀也不放过。”段九楼点点头，又道，“姑娘怎么会在客栈里？”</p> <p> 　　“我住店。”</p> <p> 　　段九楼眉头一皱，道：“那你为什么没事儿？”</p> <p> 　　“没事儿？”那姑娘又看了他一眼，“你的眼睛落在家里了？”</p> <p> 　　她的语气平平淡淡，脸上也没有什么多余的表情，却把段九楼噎得不轻。</p> <p> 　　不过仔细一看，这姑娘脸色憔悴，发髻凌乱，背上背着个不大不小的包袱，衣衫上污迹斑斑，隐约还有血渍。倒真不像是没事儿。</p> <p> 　　“我是想问你怎么逃出来的。”他解释道。</p> <p> 　　“从房顶的通风口钻出来的，我会缩骨。”</p> <p> 　　缩骨？段九楼很是惊讶，不由得从上到下扫了一遍这姑娘清奇的骨骼。</p> <p> 　　身材还不错，就是有点瘦……</p> <p> 　　“这么说姑娘是客栈里唯一的幸存者？”</p> <p> 　　“不。我出来的时候，还顺带救了一个。”</p> <p> 　　“在哪儿？”</p> <p> 　　刚问完，段九楼就看到那位姑娘从背上拿下包袱，解开，拎出一个看起来只有几个月大的婴儿。他被吓了一跳，连忙接了过来。</p> <p> 　　段九楼瞪了她一眼，接着没好气地道：“这是个孩子，又不是物件，你把他裹在包袱里，窒息了怎么办？”</p> <p> 　　姑娘一脸莫名其妙地道：“我留了条缝。”</p> <p> 　　段九楼不理她，扭头看了看怀里不谙世事的孩子，苦笑一声，道：“睡得还挺香。”</p> <p> 　　“我点了他的睡穴。”</p> <p> 　　段九楼大惊，怒道：“他还那么小，万一点坏了怎么办？你快解开！”</p> <p> 　　“他会哭的。”</p> <p> 　　“快解开！”</p> <p> 　　姑娘没办法，嫌弃地伸出手指，轻轻的戳了戳孩子的穴道。</p> <p> 　　那孩子一醒，果然“哇”的一声哭了起来。</p> <p> 　　于是，段九楼嫌弃地把孩子递给身旁的手下，也不管手下一副生无可恋的模样，吩咐道：“好好照顾这个孩子。既然是住在客栈，应该是来投奔亲戚的，派人打探一下，看能不能找到孩子的家人。”</p> <p> 　　手下领了命令，手忙脚乱地抱着孩子退了下去。</p> <p> 　　段九楼又转向那姑娘道：“除了这些，你还看到了什么？”</p> <p> 　　“那些杀手行动统一，显然是接受过严格的训练。招式狠辣果断，一招毙命，却不太像江湖杀手组织的人。”</p> <p> 　　段九楼听着她条分缕析，刚想问一句“姑娘到底是何许人也”，就听她接着道：</p> <p> 　　“对了，我和领头的人交了手，打掉了他的面罩。”</p> <p> 　　段九楼一听，顿时来了精神：“是什么样的一个人？”</p> <p> 　　“一身黑衣，身材魁梧，擅使刀，内家功夫强，轻功不咋样，没追上我。身高八尺二寸三分，体重……”</p> <p> 　　“停停停，我问的是他长什么样？”</p> <p> 　　“不知道。”</p> <p> 　　“你不是看到他的脸了吗？”</p> <p> 　　“看到了。”</p> <p> 　　“那怎么会不知道？”</p> <p> 　　“我有脸盲症。”</p> <p> 　　“……”</p> <p> 　　段九楼深吸了一口气，然后努力挤出个笑脸，道：“姑娘你叫什么名字？”</p> <p> 　　“洛璀。”</p> <p> 　　“来人。”段九楼笑脸一收，“把洛姑娘给我请回天机府。”</p> <p> 　　二、姑娘你一定是在逗我</p> <p> 　　天机府。</p> <p> 　　段九楼凑近洛璀，仔细盯着她的眼睛。</p> <p> 　　“就算你贴上来，我也只能看到一张模糊的大脸。”洛璀顿了顿，道，“说实话，有点吓人。”</p> <p> 　　洛璀只是脸盲。除了脸，什么都能看清。不仅能看清，还看得还相当细致。她甚至可以看一眼就说出对方的身高、体重和三围。这一点，段九楼已经用自己和手下的捕快证实了。</p> <p> 　　当洛璀准确地说出段九楼身高七尺八寸的时候，身后一帮捕快都快笑疯了。</p> <p> 　　“头儿，你不是说你自己身高八尺吗？”</p> <p> 　　“就是啊？头儿，你怎么还缩了两寸啊？” </p>'}],
  article: 'welcome the 好好看'
}

// getters
const getters = {
  // checkoutStatus: state => state.checkoutStatus
}

// actions
const actions = {
  clickTitle ({ commit, state }, id) {
    console.log(id)
    commit(types.STORY_GET_ARTICLE,{ id })
    
  },
  getStoryTitleList ({ commit, state }) {
    commit(types.STORY_GET_TITLELIST)
    
  }
}

// mutations
const mutations = {
  [types.STORY_GET_ARTICLE] (state, { id }) {
    console.log(id)
    const storyItem = state.titlelist.find(a => a.id === id);
    state.article = storyItem.content
    
  },

  [types.STORY_GET_TITLELIST] (state) {
    // clear cart
    state.titlelist = [
    {id: 1, title:'adsfda'},
    {id: 2, title:'adsfda'},
    {id: 3, title:'adsfda'},
    {id: 4, title:'adsfda'},
    ]
  },

}

export default {
  state,
  getters,
  actions,
  mutations
}