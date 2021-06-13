var tipuesearch = {"pages": [{'title': 'About', 'text': '40823146蕭宏翔 \n 倉儲: https://github.com/40823146/cd2021 \n 網頁: https://40823146.github.io/cd2021/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'W2~W4', 'text': '兩人一組 \n stage1-ag16 \n 題目:電風扇 \n 動機:因應季節改變 \n W2~W3:零件繪製以及放到coppeliasim上模擬並改錯 \n W4:報告 \n 我負責的部分是Coppeliasim的處理以及小組倉儲的更新 \n 在Coppeliasim上模擬的在Coppeliasim上模擬的電風扇 \n 影片: https://www.youtube.com/watch?v=Kjx-otNs8v0 \n \n', 'tags': '', 'url': 'W2~W4.html'}, {'title': 'W5~W9', 'text': '四人一組 \n stage2-ag9 \n 題目:旋轉木馬音樂盒 \n w5:討論 \n w6~8:零件繪製以及coppeliasim模擬 \n w9:報告 \n 我負責coppeliasim的模擬以及下半部的齒輪組裝及繪製 \n 在solidwork上利用以下關係式所繪製出的 \n \n \n 在coppeliasim上的模擬 \n \n https://www.youtube.com/watch?v=jTRXSWgXC44 \n \n 這次模擬時上面未加限制導致木馬轉到一半時掉下來 \n https://youtu.be/7TRqhprKHqk \n', 'tags': '', 'url': 'W5~W9.html'}, {'title': 'w11~w18', 'text': '', 'tags': '', 'url': 'w11~w18.html'}, {'title': 'w11', 'text': '被抽到直播教學 \n 以下是ssh的設定教學以及我的紀錄檔 \n https://www.youtube.com/watch?v=gvuEAUnpd3k \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': 'w12也被抽到直播教學 \n 以下是task2的教學影片 因為使用手機網路的關係導致影片還沒儲存完全 \n https://www.youtube.com/watch?v=nXythOvdul0 \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13~w14', 'text': '', 'tags': '', 'url': 'w13~w14.html'}, {'title': '小組會議', 'text': '\n', 'tags': '', 'url': '小組會議.html'}, {'title': 'task1', 'text': '參考40823131的task1 \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as fh: #打開"stage3_2a.txt檔案並命名為fh\n    # readlines will read into the whole line and put into list format 23\n    # has \\n at the end of each line 13\n    #讀取 fh檔案並當作data\n    data = fh.readlines()\n    #修改錯誤的學號\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #去除組別空白部分\n    data = [b.replace(\'\\t\\t\\t\\t\',\'\') for b in data]\n \n    #print(data)#印出data\n#print(len(data))\nfor i in range(len(data)):#設i迴圈的次數為data的長度\n    #print(data)\n    group = data[i].rstrip("\\n").split("\\t")#設group為取data的次數i消除\\n並且以\\t分割數列\n \n    #print(group)\n    print(\'<p>\'+group[0]+\' ＿ <a href="https://\'+group[1]+\'.github.io/\'+group[0]+\'">site</a> | <a href="https://github.com/\'+group[1]+\'/\'+group[0]+\'">repo</a></p>\')\n#印出group字串\n  \n   \n    for g in range(2,18,2):#設g迴圈的範圍從第3項開始+2到第18項\n        try:#try...except 可跳過讀取不到的資料\n            print(\'<p>\'+group[g]+\'＿site:\'+\'<a href="https://\'+group[g]+\'.github.io/cd2021\'+\'">\'+group[g]+\'</a>\'+\'|repo:\'+\'<a href="https://github.com/\'+group[g]+\'/cd2021\'+\'">\'+group[g]+\'</a></p>\')\n            #印出group字串\n    \n        except:\n            continue#返回迴圈 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '這邊用stage1的題目 \n \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,main_handle=vrep.simxGetObjectHandle(clientID,\'main\',vrep.simx_opmode_oneshot_wait)\n \n\n \nif errorCode == -1:\n    print(\'Can not find main_handle\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,main_handle,20, vrep.simx_opmode_oneshot_wait)\n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'robodk', 'text': '\n # KMOLab Portable RoboDK pick and place\nfrom robolink import *    # API to communicate with robodk\nfrom robodk import *      # robodk robotics toolbox\n \n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n \n#----------------------------------------------\n# Function definitions\n \ndef box_calc(BALLS_SIDE=4, BALLS_MAX=None):\n    """Calculate a list of points (ball center) as if the balls were stored in a box"""\n    if BALLS_MAX is None: BALLS_MAX = BALLS_SIDE**3\n    xyz_list = []\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE):\n            for j in range(BALLS_SIDE):\n                xyz_list = xyz_list + [[(i+0.5)*BALL_DIAMETER, (j+0.5)*BALL_DIAMETER, (h+0.5)*BALL_DIAMETER]]\n                if len(xyz_list) >= BALLS_MAX:\n                    return xyz_list\n    return xyz_list\n \ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n \ndef balls_setup(frame, positions):\n    """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard."""\n    nballs = len(positions)\n    step = 1.0/(nballs - 1)\n    for i in range(nballs):\n        newball = frame.Paste()\n        newball.setName(\'ball \' + str(i)) #set item name\n        newball.setPose(transl(positions[i])) #set item position with respect to parent\n        newball.setVisible(True, False) #make item visible but hide the reference frame\n        newball.Recolor([1-step*i, step*i, 0.2, 1]) #set RGBA color\n \ndef cleanup_balls(parentnodes):\n    """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items."""\n    todelete = []\n    for item in parentnodes:\n        todelete = todelete + item.Childs()\n \n    for item in todelete:\n        if item.Name().startswith(\'ball\'):\n            item.Delete()\n \ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n         \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n \n \n#----------------------------------------------------------\n# The program starts here:\n \n# Any interaction with RoboDK must be done through RDK:\nRDK = Robolink(robodk_path="C:/robodk/bin/RoboDK.exe", robodk_ip=\'127.0.0.1\')\n \n# Turn off automatic rendering (faster)\nRDK.Render(False)\n \n#RDK.Set_Simulation_Speed(500); # set the simulation speed\n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n# Copy a ball as an object (same as CTRL+C)\nballref = RDK.Item(\'reference ball\')\nballref.Copy()\n \n# Run a pre-defined station program (in RoboDK) to replace the two tables\nprog_reset = RDK.Item(\'Replace objects\')\nprog_reset.RunProgram()\n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1, frame2])\n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame1, frame1_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n# Turn on automatic rendering\nRDK.Render(True)\n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n \n \n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n \n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1 , frame2])\n \n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame2, frame2_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n \n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame2 = len(frame2_list)\nnballs_frame1 = len(frame1_list)\nidTake = nballs_frame2 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame2)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame1)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200]) \n', 'tags': '', 'url': 'robodk.html'}, {'title': 'w15', 'text': '影片翻譯 \n Inverse kinematics for a 2-joint robot arm using geometry \n \xa0 \n We saw this simple two-link robot in the previous lecture about forward kinematics \n 我們在之前的正向運動學的講座中看到了這個簡單的雙連桿機構 \n The tooltip pose of this robot is described simply by two numbers \n 這個連趕工具是由兩個數字簡單描述的 \n the coordinates x and y with respect to the world coordinate system \n 相對於絕對坐標系的x和y \n So, the problem here is that given x and y \n 這裡的問題是我們訂了x和y \n we want to determine the joined angles, Q1 and Q2 \n 要如何確定連接角度 Q1和Q2 \n The solution that we’re going to follow in this particular section is a geometric one \n 在特殊的部分需依照其中一種幾何學的解決方案 \n We’re going to start with a simple piece of construction \n 我們要從一個簡單的結構上開始 \n We’re going to overlay the red triangle on top of our robot \n 假設把一個紅色的三角形放在我們的機構上 \n We know that the end point coordinate is x,y\xa0 so the vertical height of the triangle is y, the horizontal width is x \n 以肢端點座標為X和Y 三角形的垂直高度為Y 水平寬度為X \n And using Pythagoras theorem, we can write r squared equals x squared plus y squared\xa0 So far, so easy \n 利用畢氏定理即可得出\xa0 r的平方=x的平方+y的平方\xa0 目前都很簡單 \n Now, we’re going to look at this triangle highlighted here in red and we want to determine \n the angle alpha \n 現在我們來看此處用紅色突出顯示的三角形並且確定出我們想要的角度α \n In order to do that, we need to use the cosine rule \n 為了做到這件事我們必須使用餘弦定理 \n And if you’re a little rusty on the cosine rule, here is a bit of a refresher \n 如果你對餘弦定理有點不熟悉這裡有一些資料可以複習 \n We have an arbitrary triangle \n 這裡有個任意三角形 \n We don’t have to have any right angles in it \n 裡面沒有任何直角 \n and we’re going to label the length of this edge as A and the angle opposite that edge, we’re going to label as little a \n 我們把這條邊的長度標為A與這條邊相對的角我們標記為a \n And we do the same for this edge and this angle and this edge and this angle \n 對另外 兩邊的邊和角做相同的事 \n So all together the sides are labelled capitals A,B and C and the angles are labelled little a, little b and little c \n 把所有的邊都被標記為A,B,C然後角都被標記為a,b,c \n So, the cosine rule is simply this relationship here \n 餘弦定理在這裡就可以以這種簡單的關係表示 \n It’s a bit like Pythagoras’ theorem except for this extra term on the end with the cos a in it \n 它有點類似於畢氏定理只是在最後加了一個帶cosa的項 \n Now, let’s apply the cosine rule to the particular triangle we looked at a moment ago \n 讓我們把餘弦定理運用在剛才看到的那個特定三角形上 \n It’s pretty straightforward to write down this particular relationship \n 可以很直接地寫下此種特殊關係 \n We can isolate the term cos alpha which gives us the angle alpha that we’re interested in \n 我們可以將我們所感興趣的α角求出需將給定的cos\xa0 α 項分離出來 \n And, it’s defined in terms of the constant link lengths, A1 and A2 and the position of the end effector x and y \n 它是以恆定的連桿長度A1及A2以及末端執行器位置x與y來定義的 \n We can write this simple relationship between the angles alpha and Q2 \n 我們可以寫出此種於α角和q2之間的簡單關係 \n And we know from the shape of the cosine function that cos of Q2 must be equal to negative of cos alpha \n 而且我們從餘弦函數的形狀得知cos q2須等於 -cos\xa0 α \n This time, let’s just write an expressionfor the cosine of the joined angle Q2 \n 這次，讓我們只寫出有關連接角q2的餘弦表達式 \n Now we’re going to draw yet another red triangle and we’re going apply some simple trigonometry here \n 再畫一個紅色三角形並且在這使用一些簡單的三角函數 \n If we know Q2, then we know this length and this length of the red triangle \n 如果我們知道了q2那我們便可得紅色三角形中q2的對邊長與鄰邊長 \n We can write this relationship for the sine of the joined angle Q2 \n 我們可以將這種關係寫為連接角q2的正弦 \n Now we can consider this bigger triangle whose angle is beta and this side length of the triangle is given here in blue \n 我們可以考慮更大的三角形其角度為β這個三角形的邊長用藍色表示 \n And the length of the other side of the triangle is this \n 三角形的另一邊長是這樣表示的 \n so now we can write an expression for the angle beta in terms of these parameters here \n 我們可以用這些參數來寫出一個β角的表達式 \n Going back to the red triangle that we drew earlier we can establish a relationship between Q1 and the angle beta \n 回到之前我們畫的紅色三角形，我們可以在q1和β角之間建立一個關係 \n Introduce yet another angle, this one gamma and we can write a relationship between the angle gamma and the tooltip coordinates x and y \n 代入另一個角度 γ，我們可寫出γ角和工具軟件座標x和y之間的關係 \n Now we can write a simple relationship between the angles that we’ve constructed gammaand beta and the joined angle we’re interested in which is Q1 \n 我們可以用建構出的角度γ,β來寫出γ角和β角與欲求之連接角q1之間的簡單關係 \n And the total relationship looks something like this \n 整體關係看起來像這樣 \n Quite a complex relationship \n 這個是相當複雜的一個關係 \n it gives us the angle of joined one, that’s Q1 in terms of the end effector coordinates y and x and a bunch of constants, a1 and a2 and it’s also a function of the second joint angle Q2 \n 此為相當複雜的一個關係它提供了第一關節角q1與端點坐標y和x以及一堆常數a1和a2並且它也是第二關節角q2的函數 \n So, let’s summarize what it is that we have derived here \n 讓我們總結一下在這裡得出的結論為何 \n We have an expression for the cosine of Q2 and we have an expression for Q1 \n 我們有一個q2的餘弦表達式，和一個q1表達式 \n Now, the cosine function is symmetrical about 0 \n 餘弦函數在0時為對稱的 \n So, if we know the value of the cosine of Q2 then there are two possible solutions a positive angle and a negative angle \n 假如我們得知cosq2，那它便會有正角與負角兩種解 \n We’re going to explicitly choose the positive angle, which means that I can write this expression here \n 在這裡明確的選擇正角，這意味著我可以在此處寫這個表達式 \n And now, we have what we call the inverse kinematic solution for this two-link robot \n 現在我們有了解決雙連桿機構的逆向運動學函式 \n We have an expression for the two joined anglesQ1 and Q2 in terms of the end effector pose x and y and a bunch of constants \n 我們有一個對連接角q1和q2的表達式其與末端執行器構成的x和y和一大堆常數有關 \n You notice that the two equations are not independent \n 你會注意到這兩個方程式並不獨立 \n The equation for Q1 in fact depends on the solution for Q2 \n 實際上q1的方程式取決於q2的解 \n In this case, Q2 is negative and we’re going to write the solution for Q2 with a negative sign in front of the inverse cosine \n 在這種情況下q2為負因此我們要在反餘弦前加上負號來寫出q2的解 \n Now, we need to solve for Q1, so we’re going to introduce this particular red triangle the angle beta that we solved previously and the angle gamma which is defined in terms of y and x \n 現在我們要求出q1的解所以我們要引入這個特定的紅色三角形並用之前得出的β角以及用y和x定義出的γ角 \n Now we write a slightly different relationship between Q1 gamma and beta different to what we had before \n 我們在q1γ和β之間寫了一個與之前稍微不同的關係 \n There’s a change of sign involved \n 這涉及到符號的變化 \n Then, we can substitute all that previous equation and come up with this expression for Q1 \n 然後將先前所有的方程代入可得出這個q1的表達式 \n Again, there is a change of sign here \n 同樣地這裡也有一個符號的變化 \n Previously this was a negative sign \n 在之前的式子裡這裡是負號 \n And, here in summary form is the solution for the inverse kinematics of our two-link robot when it is in this particular configuration where Q2 is negative \n 在之前的式子裡，這裡是負號值 \n Let’s compare the two solutions, the case where q2 is positive and the case where q2 is negative \n 讓我們在q2為正以及q2為負的情況下進行兩種解法的比較 \n', 'tags': '', 'url': 'w15.html'}]};