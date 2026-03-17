# Esoteric Ebb Reddit 社区爆款解决方案集

## 1. 【任务卡关】Star Witness (Day 3) 找不到推进点
* **问题症状**：Snell 反复提醒探索 City Below，但任务列表不动。
* **解决方案**：
    * 前往 **City Below 西北区域 (NW)**，那里有一扇隐藏门通往更深处。
    * **进阶方法**：去 Goblin Underground Garden（地标：中心水池）往西走，找 **Underdwarf** 完成任务，获取 `Detect Secret` 法术。在西北角施放该法术可直接发现入口。

## 2. 【进度警告】Point of No Return (无法回头点)
* **判定点**：进入 **Pillar (柱子)** 即进入大后期结局序列。
* **建议清单**：
    1.  确认是否拿到了 `Deck of Many Things`。
    2.  确认是否完成了所有伙伴支线。
    3.  **核心操作**：进入前建立一个名为 "Endgame_Backup" 的独立手动存档。

## 3. 【导航辅助】这游戏真的没有地图吗？
* **技巧**：按 **Journal (日志)** 键。虽然没有传统小地图，但 Journal 界面会标注所有已发现的门、出入口和连接点。
* **功能**：善用 **Behold** 机制。它不仅能看属性，还是扫描环境中隐藏捷径的唯一雷达。

## 4. 【规则澄清】Speak with Dead 施放失败
* **原因**：该法术需要 3 环法术位。玩家在 Day 1 等级过低，无法施展。
* **注意**：尸体被带走是剧情杀（被精灵带走），即便施放成功也无法改变尸体失踪的结局。

## 5. 【流派心得】魅力流 (Charisma) 避坑指南
* **黄金法则**：不要过早站队。尽量保持 **Apolitical** 标签。
* **优势**：Charisma 在本作中更像一种“社会病态者的快乐”，通过操纵他人来达成目的，而不仅仅是交友。

## 6. 【Bug 追踪】Frozen Sprout 对话报错
* **症状**：使用 Druidcraft 后弹出 "frozen sprout errored out"。
* **现状**：已确认为版本 Bug。
* **对策**：先绕过该 NPC 去做其他支线。官方 Hotfix 通常在 CET 时间上午 10 点更新，请检查 Steam 更新日志。

## 7. 【系统 Bug】技能熟练度 (Proficiency) 异常
* **症状**：创建角色时选了多项，但面板只显示一项。
* **修复思路**：备份 AppData 下的存档文件，在 JSON 字段中搜索 `proficient`，检查布尔值（True/False）。（注：风险操作，建议等待官方补丁）。