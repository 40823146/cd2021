var tipuesearch = {"pages": [{'title': 'About', 'text': '40823146蕭宏翔 \n 倉儲: https://github.com/40823146/cd2021 \n 網頁: https://40823146.github.io/cd2021/content/index.html \n \n', 'tags': '', 'url': 'About.html'}, {'title': 'W2~W4', 'text': '兩人一組 \n stage1-ag16 \n 題目:電風扇 \n 動機:因應季節改變 \n W2~W3:零件繪製以及放到coppeliasim上模擬並改錯 \n W4:報告 \n 我負責的部分是Coppeliasim的處理以及小組倉儲的更新 \n 在Coppeliasim上模擬的在Coppeliasim上模擬的電風扇 \n 影片: https://www.youtube.com/watch?v=Kjx-otNs8v0 \n \n', 'tags': '', 'url': 'W2~W4.html'}, {'title': 'W5~W9', 'text': '四人一組 \n stage2-ag9 \n 題目:旋轉木馬音樂盒 \n w5:討論 \n w6~8:零件繪製以及coppeliasim模擬 \n w9:報告 \n 我負責coppeliasim的模擬以及下半部的齒輪組裝及繪製 \n 在solidwork上利用以下關係式所繪製出的 \n \n \n 在coppeliasim上的模擬 \n \n https://www.youtube.com/watch?v=jTRXSWgXC44 \n \n 這次模擬時上面未加限制導致木馬轉到一半時掉下來 \n https://youtu.be/7TRqhprKHqk \n', 'tags': '', 'url': 'W5~W9.html'}, {'title': 'w11~w18', 'text': '', 'tags': '', 'url': 'w11~w18.html'}, {'title': 'w11', 'text': '被抽到直播教學 \n 以下是ssh的設定教學以及我的紀錄檔 \n https://www.youtube.com/watch?v=gvuEAUnpd3k \n \n', 'tags': '', 'url': 'w11.html'}, {'title': 'w12', 'text': 'w12也被抽到直播教學 \n 以下是task2的教學影片 因為使用手機網路的關係導致影片還沒儲存完全 \n https://www.youtube.com/watch?v=nXythOvdul0 \n \n', 'tags': '', 'url': 'w12.html'}, {'title': 'w13~w14', 'text': '', 'tags': '', 'url': 'w13~w14.html'}, {'title': 'task1', 'text': '參考40823131的task1 \n # open file, default is read mode, since txt content no chinese char4\n# no encoding = "UTF-08" is needed\nwith open("stage3_2a.txt") as fh: #打開"stage3_2a.txt檔案並命名為fh\n    # readlines will read into the whole line and put into list format 23\n    # has \\n at the end of each line 13\n    #讀取 fh檔案並當作data\n    data = fh.readlines()\n    #修改錯誤的學號\n    data = [a.replace(\'4823122\',\'40823122\') for a in data]\n    #去除組別空白部分\n    data = [b.replace(\'\\t\\t\\t\\t\',\'\') for b in data]\n \n    #print(data)#印出data\n#print(len(data))\nfor i in range(len(data)):#設i迴圈的次數為data的長度\n    #print(data)\n    group = data[i].rstrip("\\n").split("\\t")#設group為取data的次數i消除\\n並且以\\t分割數列\n \n    #print(group)\n    print(\'<p>\'+group[0]+\' ＿ <a href="https://\'+group[1]+\'.github.io/\'+group[0]+\'">site</a> | <a href="https://github.com/\'+group[1]+\'/\'+group[0]+\'">repo</a></p>\')\n#印出group字串\n  \n   \n    for g in range(2,18,2):#設g迴圈的範圍從第3項開始+2到第18項\n        try:#try...except 可跳過讀取不到的資料\n            print(\'<p>\'+group[g]+\'＿site:\'+\'<a href="https://\'+group[g]+\'.github.io/cd2021\'+\'">\'+group[g]+\'</a>\'+\'|repo:\'+\'<a href="https://github.com/\'+group[g]+\'/cd2021\'+\'">\'+group[g]+\'</a></p>\')\n            #印出group字串\n    \n        except:\n            continue#返回迴圈 \n', 'tags': '', 'url': 'task1.html'}, {'title': 'task2', 'text': '這邊用stage1的題目 \n \n import sim as vrep\nimport sys\n# child threaded script: \n#simExtRemoteApiStart(19999)\n \nvrep.simxFinish(-1)\n \nclientID = vrep.simxStart(\'127.0.0.1\', 19999, True, True, 5000, 5)\n \nif clientID!= -1:\n    print("Connected to remote server")\nelse:\n    print(\'Connection not successful\')\n    sys.exit(\'Could not connect\')\n \nerrorCode,main_handle=vrep.simxGetObjectHandle(clientID,\'main\',vrep.simx_opmode_oneshot_wait)\n \n\n \nif errorCode == -1:\n    print(\'Can not find main_handle\')\n    sys.exit()\n \nerrorCode=vrep.simxSetJointTargetVelocity(clientID,main_handle,20, vrep.simx_opmode_oneshot_wait)\n \n', 'tags': '', 'url': 'task2.html'}, {'title': 'robodk', 'text': '\n # KMOLab Portable RoboDK pick and place\nfrom robolink import *    # API to communicate with robodk\nfrom robodk import *      # robodk robotics toolbox\n \n# Setup global parameters\nBALL_DIAMETER = 100 # diameter of one ball\nAPPROACH = 100      # approach distance to grab each part, in mm\nnTCPs = 6           # number of TCP\'s in the tool\n \n#----------------------------------------------\n# Function definitions\n \ndef box_calc(BALLS_SIDE=4, BALLS_MAX=None):\n    """Calculate a list of points (ball center) as if the balls were stored in a box"""\n    if BALLS_MAX is None: BALLS_MAX = BALLS_SIDE**3\n    xyz_list = []\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE):\n            for j in range(BALLS_SIDE):\n                xyz_list = xyz_list + [[(i+0.5)*BALL_DIAMETER, (j+0.5)*BALL_DIAMETER, (h+0.5)*BALL_DIAMETER]]\n                if len(xyz_list) >= BALLS_MAX:\n                    return xyz_list\n    return xyz_list\n \ndef pyramid_calc(BALLS_SIDE=4):\n    """Calculate a list of points (ball center) as if the balls were place in a pyramid"""\n    #the number of balls can be calculated as: int(BALLS_SIDE*(BALLS_SIDE+1)*(2*BALLS_SIDE+1)/6)\n    BALL_DIAMETER = 100\n    xyz_list = []\n    sqrt2 = 2**(0.5)\n    for h in range(BALLS_SIDE):\n        for i in range(BALLS_SIDE-h):\n            for j in range(BALLS_SIDE-h):\n                height = h*BALL_DIAMETER/sqrt2 + BALL_DIAMETER/2\n                xyz_list = xyz_list + [[i*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, j*BALL_DIAMETER + (h+1)*BALL_DIAMETER*0.5, height]]\n    return xyz_list\n \ndef balls_setup(frame, positions):\n    """Place a list of balls in a reference frame. The reference object (ball) must have been previously copied to the clipboard."""\n    nballs = len(positions)\n    step = 1.0/(nballs - 1)\n    for i in range(nballs):\n        newball = frame.Paste()\n        newball.setName(\'ball \' + str(i)) #set item name\n        newball.setPose(transl(positions[i])) #set item position with respect to parent\n        newball.setVisible(True, False) #make item visible but hide the reference frame\n        newball.Recolor([1-step*i, step*i, 0.2, 1]) #set RGBA color\n \ndef cleanup_balls(parentnodes):\n    """Delete all child items whose name starts with \\"ball\\", from the provided list of parent items."""\n    todelete = []\n    for item in parentnodes:\n        todelete = todelete + item.Childs()\n \n    for item in todelete:\n        if item.Name().startswith(\'ball\'):\n            item.Delete()\n \ndef TCP_On(toolitem, tcp_id):\n    """Attach the closest object to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_On)"""\n    toolitem.AttachClosest()\n    toolitem.RDK().RunMessage(\'Set air valve %i on\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_On(%i)\' % (tcp_id+1));\n         \ndef TCP_Off(toolitem, tcp_id, itemleave=0):\n    """Detaches the closest object attached to the toolitem Htool pose,\n    furthermore, it will output appropriate function calls on the generated robot program (call to TCP_Off)"""\n    toolitem.DetachAll(itemleave)\n    toolitem.RDK().RunMessage(\'Set air valve %i off\' % (tcp_id+1))\n    toolitem.RDK().RunProgram(\'TCP_Off(%i)\' % (tcp_id+1));\n \n \n#----------------------------------------------------------\n# The program starts here:\n \n# Any interaction with RoboDK must be done through RDK:\nRDK = Robolink(robodk_path="C:/robodk/bin/RoboDK.exe", robodk_ip=\'127.0.0.1\')\n \n# Turn off automatic rendering (faster)\nRDK.Render(False)\n \n#RDK.Set_Simulation_Speed(500); # set the simulation speed\n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n# Copy a ball as an object (same as CTRL+C)\nballref = RDK.Item(\'reference ball\')\nballref.Copy()\n \n# Run a pre-defined station program (in RoboDK) to replace the two tables\nprog_reset = RDK.Item(\'Replace objects\')\nprog_reset.RunProgram()\n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1, frame2])\n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame1, frame1_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n# Turn on automatic rendering\nRDK.Render(True)\n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame1 = len(frame1_list)\nnballs_frame2 = len(frame2_list)\nidTake = nballs_frame1 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame1)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame2)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200])\n \n \n \n# Gather required items from the station tree\nrobot = RDK.Item(\'Fanuc M-710iC/50\')\nrobot_tools = robot.Childs()\n#robottool = RDK.Item(\'MainTool\')\nframe1 = RDK.Item(\'Table 1\')\nframe2 = RDK.Item(\'Table 2\')\n \n \n \n# Call custom procedure to remove old objects\ncleanup_balls([frame1 , frame2])\n \n \n# Make a list of positions to place the objects\nframe1_list = pyramid_calc(4)\nframe2_list = pyramid_calc(4)\n \n# Programmatically place the objects with a custom-made procedure\nballs_setup(frame2, frame2_list)\n \n# Delete previously generated tools\nfor tool in robot_tools:\n    if tool.Name().startswith(\'TCP\'):\n        tool.Delete()\n         \n# Calculate tool frames for the suction cup tool of 6 suction cups\nTCP_list = []\nfor i in range(nTCPs):\n    TCPi_pose = transl(0,0,100)*rotz((360/nTCPs)*i*pi/180)*transl(125,0,0)*roty(pi/2)\n    TCPi = robot.AddTool(TCPi_pose, \'TCP %i\' % (i+1))\n    TCP_list.append(TCPi)\n \nTCP_0 = TCP_list[0]\n \n \n \n# Move balls    \nrobot.setPoseTool(TCP_list[0])\nnballs_frame2 = len(frame2_list)\nnballs_frame1 = len(frame1_list)\nidTake = nballs_frame2 - 1\nidLeave = 0\nidTCP = 0\ntarget_app_frame = transl(2*BALL_DIAMETER, 2*BALL_DIAMETER, 4*BALL_DIAMETER)*roty(pi)*transl(0,0,-APPROACH)\n \nwhile idTake >= 0:\n    # ------------------------------------------------------------------\n    # first priority: grab as many balls as possible\n    # the tool is empty at this point, so take as many balls as possible (up to a maximum of 6 -> nTCPs)\n    ntake = min(nTCPs, idTake + 1)\n \n    # approach to frame 1\n    robot.setPoseFrame(frame2)\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.MoveJ(target_app_frame)\n \n    # grab ntake balls from frame 1\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        # calculate target wrt frame1: rotation about Y is needed since Z and X axis are inverted\n        target = transl(frame2_list[idTake])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idTake = idTake - 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_On(TCPi, i)\n        robot.MoveL(target_app)\n  \n    # ------------------------------------------------------------------\n    # second priority: unload the tool     \n    # approach to frame 2 and place the tool balls into table 2\n    robot.setPoseTool(TCP_0)\n    robot.MoveJ(target_app_frame)\n    robot.MoveJ([0,0,0,0,10,-200])\n    robot.setPoseFrame(frame1)    \n    robot.MoveJ(target_app_frame)\n    for i in range(ntake):\n        TCPi = TCP_list[i]\n        robot.setPoseTool(TCPi)\n        if idLeave > nballs_frame2-1:\n            raise Exception("No room left to place objects in Table 2")\n         \n        # calculate target wrt frame1: rotation of 180 about Y is needed since Z and X axis are inverted\n        target = transl(frame1_list[idLeave])*roty(pi)*rotx(30*pi/180)\n        target_app = target*transl(0,0,-APPROACH)\n        idLeave = idLeave + 1       \n        robot.MoveL(target_app)\n        robot.MoveL(target)\n        TCP_Off(TCPi, i, frame2)\n        robot.MoveL(target_app)\n \n    robot.MoveJ(target_app_frame)\n \n# Move home when the robot finishes\nrobot.MoveJ([0,0,0,0,10,-200]) \n', 'tags': '', 'url': 'robodk.html'}]};