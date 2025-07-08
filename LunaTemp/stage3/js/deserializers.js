var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1500 = root || request.c( 'UnityEngine.JointSpring' )
  var i1501 = data
  i1500.spring = i1501[0]
  i1500.damper = i1501[1]
  i1500.targetPosition = i1501[2]
  return i1500
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1502 = root || request.c( 'UnityEngine.JointMotor' )
  var i1503 = data
  i1502.m_TargetVelocity = i1503[0]
  i1502.m_Force = i1503[1]
  i1502.m_FreeSpin = i1503[2]
  return i1502
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1504 = root || request.c( 'UnityEngine.JointLimits' )
  var i1505 = data
  i1504.m_Min = i1505[0]
  i1504.m_Max = i1505[1]
  i1504.m_Bounciness = i1505[2]
  i1504.m_BounceMinVelocity = i1505[3]
  i1504.m_ContactDistance = i1505[4]
  i1504.minBounce = i1505[5]
  i1504.maxBounce = i1505[6]
  return i1504
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.JointDrive' )
  var i1507 = data
  i1506.m_PositionSpring = i1507[0]
  i1506.m_PositionDamper = i1507[1]
  i1506.m_MaximumForce = i1507[2]
  i1506.m_UseAcceleration = i1507[3]
  return i1506
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1509 = data
  i1508.m_Spring = i1509[0]
  i1508.m_Damper = i1509[1]
  return i1508
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1510 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1511 = data
  i1510.m_Limit = i1511[0]
  i1510.m_Bounciness = i1511[1]
  i1510.m_ContactDistance = i1511[2]
  return i1510
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1512 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1513 = data
  i1512.m_ExtremumSlip = i1513[0]
  i1512.m_ExtremumValue = i1513[1]
  i1512.m_AsymptoteSlip = i1513[2]
  i1512.m_AsymptoteValue = i1513[3]
  i1512.m_Stiffness = i1513[4]
  return i1512
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1515 = data
  i1514.m_LowerAngle = i1515[0]
  i1514.m_UpperAngle = i1515[1]
  return i1514
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1517 = data
  i1516.m_MotorSpeed = i1517[0]
  i1516.m_MaximumMotorTorque = i1517[1]
  return i1516
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1519 = data
  i1518.m_DampingRatio = i1519[0]
  i1518.m_Frequency = i1519[1]
  i1518.m_Angle = i1519[2]
  return i1518
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1521 = data
  i1520.m_LowerTranslation = i1521[0]
  i1520.m_UpperTranslation = i1521[1]
  return i1520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1523 = data
  i1522.name = i1523[0]
  i1522.width = i1523[1]
  i1522.height = i1523[2]
  i1522.mipmapCount = i1523[3]
  i1522.anisoLevel = i1523[4]
  i1522.filterMode = i1523[5]
  i1522.hdr = !!i1523[6]
  i1522.format = i1523[7]
  i1522.wrapMode = i1523[8]
  i1522.alphaIsTransparency = !!i1523[9]
  i1522.alphaSource = i1523[10]
  i1522.graphicsFormat = i1523[11]
  i1522.sRGBTexture = !!i1523[12]
  i1522.desiredColorSpace = i1523[13]
  i1522.wrapU = i1523[14]
  i1522.wrapV = i1523[15]
  return i1522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1525 = data
  i1524.name = i1525[0]
  i1524.halfPrecision = !!i1525[1]
  i1524.useUInt32IndexFormat = !!i1525[2]
  i1524.vertexCount = i1525[3]
  i1524.aabb = i1525[4]
  var i1527 = i1525[5]
  var i1526 = []
  for(var i = 0; i < i1527.length; i += 1) {
    i1526.push( !!i1527[i + 0] );
  }
  i1524.streams = i1526
  i1524.vertices = i1525[6]
  var i1529 = i1525[7]
  var i1528 = []
  for(var i = 0; i < i1529.length; i += 1) {
    i1528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1529[i + 0]) );
  }
  i1524.subMeshes = i1528
  var i1531 = i1525[8]
  var i1530 = []
  for(var i = 0; i < i1531.length; i += 16) {
    i1530.push( new pc.Mat4().setData(i1531[i + 0], i1531[i + 1], i1531[i + 2], i1531[i + 3],  i1531[i + 4], i1531[i + 5], i1531[i + 6], i1531[i + 7],  i1531[i + 8], i1531[i + 9], i1531[i + 10], i1531[i + 11],  i1531[i + 12], i1531[i + 13], i1531[i + 14], i1531[i + 15]) );
  }
  i1524.bindposes = i1530
  var i1533 = i1525[9]
  var i1532 = []
  for(var i = 0; i < i1533.length; i += 1) {
    i1532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1533[i + 0]) );
  }
  i1524.blendShapes = i1532
  return i1524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1539 = data
  i1538.triangles = i1539[0]
  return i1538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1545 = data
  i1544.name = i1545[0]
  var i1547 = i1545[1]
  var i1546 = []
  for(var i = 0; i < i1547.length; i += 1) {
    i1546.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1547[i + 0]) );
  }
  i1544.frames = i1546
  return i1544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1548 = root || new pc.UnityMaterial()
  var i1549 = data
  i1548.name = i1549[0]
  request.r(i1549[1], i1549[2], 0, i1548, 'shader')
  i1548.renderQueue = i1549[3]
  i1548.enableInstancing = !!i1549[4]
  var i1551 = i1549[5]
  var i1550 = []
  for(var i = 0; i < i1551.length; i += 1) {
    i1550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1551[i + 0]) );
  }
  i1548.floatParameters = i1550
  var i1553 = i1549[6]
  var i1552 = []
  for(var i = 0; i < i1553.length; i += 1) {
    i1552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1553[i + 0]) );
  }
  i1548.colorParameters = i1552
  var i1555 = i1549[7]
  var i1554 = []
  for(var i = 0; i < i1555.length; i += 1) {
    i1554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1555[i + 0]) );
  }
  i1548.vectorParameters = i1554
  var i1557 = i1549[8]
  var i1556 = []
  for(var i = 0; i < i1557.length; i += 1) {
    i1556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1557[i + 0]) );
  }
  i1548.textureParameters = i1556
  var i1559 = i1549[9]
  var i1558 = []
  for(var i = 0; i < i1559.length; i += 1) {
    i1558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1559[i + 0]) );
  }
  i1548.materialFlags = i1558
  return i1548
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1563 = data
  i1562.name = i1563[0]
  i1562.value = i1563[1]
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1566 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1567 = data
  i1566.name = i1567[0]
  i1566.value = new pc.Color(i1567[1], i1567[2], i1567[3], i1567[4])
  return i1566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1571 = data
  i1570.name = i1571[0]
  i1570.value = new pc.Vec4( i1571[1], i1571[2], i1571[3], i1571[4] )
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1575 = data
  i1574.name = i1575[0]
  request.r(i1575[1], i1575[2], 0, i1574, 'value')
  return i1574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1579 = data
  i1578.name = i1579[0]
  i1578.enabled = !!i1579[1]
  return i1578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1581 = data
  i1580.position = new pc.Vec3( i1581[0], i1581[1], i1581[2] )
  i1580.scale = new pc.Vec3( i1581[3], i1581[4], i1581[5] )
  i1580.rotation = new pc.Quat(i1581[6], i1581[7], i1581[8], i1581[9])
  return i1580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1583 = data
  request.r(i1583[0], i1583[1], 0, i1582, 'sharedMesh')
  return i1582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1585 = data
  request.r(i1585[0], i1585[1], 0, i1584, 'additionalVertexStreams')
  i1584.enabled = !!i1585[2]
  request.r(i1585[3], i1585[4], 0, i1584, 'sharedMaterial')
  var i1587 = i1585[5]
  var i1586 = []
  for(var i = 0; i < i1587.length; i += 2) {
  request.r(i1587[i + 0], i1587[i + 1], 2, i1586, '')
  }
  i1584.sharedMaterials = i1586
  i1584.receiveShadows = !!i1585[6]
  i1584.shadowCastingMode = i1585[7]
  i1584.sortingLayerID = i1585[8]
  i1584.sortingOrder = i1585[9]
  i1584.lightmapIndex = i1585[10]
  i1584.lightmapSceneIndex = i1585[11]
  i1584.lightmapScaleOffset = new pc.Vec4( i1585[12], i1585[13], i1585[14], i1585[15] )
  i1584.lightProbeUsage = i1585[16]
  i1584.reflectionProbeUsage = i1585[17]
  return i1584
}

Deserializers["MatchObject"] = function (request, data, root) {
  var i1590 = root || request.c( 'MatchObject' )
  var i1591 = data
  i1590.id = i1591[0]
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1593 = data
  i1592.name = i1593[0]
  i1592.tagId = i1593[1]
  i1592.enabled = !!i1593[2]
  i1592.isStatic = !!i1593[3]
  i1592.layer = i1593[4]
  return i1592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1595 = data
  i1594.name = i1595[0]
  i1594.atlasId = i1595[1]
  i1594.mipmapCount = i1595[2]
  i1594.hdr = !!i1595[3]
  i1594.size = i1595[4]
  i1594.anisoLevel = i1595[5]
  i1594.filterMode = i1595[6]
  var i1597 = i1595[7]
  var i1596 = []
  for(var i = 0; i < i1597.length; i += 4) {
    i1596.push( UnityEngine.Rect.MinMaxRect(i1597[i + 0], i1597[i + 1], i1597[i + 2], i1597[i + 3]) );
  }
  i1594.rects = i1596
  i1594.wrapU = i1595[8]
  i1594.wrapV = i1595[9]
  return i1594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1601 = data
  i1600.name = i1601[0]
  i1600.index = i1601[1]
  i1600.startup = !!i1601[2]
  return i1600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1603 = data
  i1602.enabled = !!i1603[0]
  i1602.aspect = i1603[1]
  i1602.orthographic = !!i1603[2]
  i1602.orthographicSize = i1603[3]
  i1602.backgroundColor = new pc.Color(i1603[4], i1603[5], i1603[6], i1603[7])
  i1602.nearClipPlane = i1603[8]
  i1602.farClipPlane = i1603[9]
  i1602.fieldOfView = i1603[10]
  i1602.depth = i1603[11]
  i1602.clearFlags = i1603[12]
  i1602.cullingMask = i1603[13]
  i1602.rect = i1603[14]
  request.r(i1603[15], i1603[16], 0, i1602, 'targetTexture')
  i1602.usePhysicalProperties = !!i1603[17]
  i1602.focalLength = i1603[18]
  i1602.sensorSize = new pc.Vec2( i1603[19], i1603[20] )
  i1602.lensShift = new pc.Vec2( i1603[21], i1603[22] )
  i1602.gateFit = i1603[23]
  i1602.commandBufferCount = i1603[24]
  i1602.cameraType = i1603[25]
  return i1602
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalCameraData"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalCameraData' )
  var i1605 = data
  i1604.m_RenderShadows = !!i1605[0]
  i1604.m_RequiresDepthTextureOption = i1605[1]
  i1604.m_RequiresOpaqueTextureOption = i1605[2]
  i1604.m_CameraType = i1605[3]
  var i1607 = i1605[4]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Camera')))
  for(var i = 0; i < i1607.length; i += 2) {
  request.r(i1607[i + 0], i1607[i + 1], 1, i1606, '')
  }
  i1604.m_Cameras = i1606
  i1604.m_RendererIndex = i1605[5]
  i1604.m_VolumeLayerMask = UnityEngine.LayerMask.FromIntegerValue( i1605[6] )
  request.r(i1605[7], i1605[8], 0, i1604, 'm_VolumeTrigger')
  i1604.m_VolumeFrameworkUpdateModeOption = i1605[9]
  i1604.m_RenderPostProcessing = !!i1605[10]
  i1604.m_Antialiasing = i1605[11]
  i1604.m_AntialiasingQuality = i1605[12]
  i1604.m_StopNaN = !!i1605[13]
  i1604.m_Dithering = !!i1605[14]
  i1604.m_ClearDepth = !!i1605[15]
  i1604.m_AllowXRRendering = !!i1605[16]
  i1604.m_AllowHDROutput = !!i1605[17]
  i1604.m_UseScreenCoordOverride = !!i1605[18]
  i1604.m_ScreenSizeOverride = new pc.Vec4( i1605[19], i1605[20], i1605[21], i1605[22] )
  i1604.m_ScreenCoordScaleBias = new pc.Vec4( i1605[23], i1605[24], i1605[25], i1605[26] )
  i1604.m_RequiresDepthTexture = !!i1605[27]
  i1604.m_RequiresColorTexture = !!i1605[28]
  i1604.m_Version = i1605[29]
  i1604.m_TaaSettings = request.d('UnityEngine.Rendering.Universal.TemporalAA+Settings', i1605[30], i1604.m_TaaSettings)
  return i1604
}

Deserializers["UnityEngine.Rendering.Universal.TemporalAA+Settings"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.Rendering.Universal.TemporalAA+Settings' )
  var i1611 = data
  i1610.m_Quality = i1611[0]
  i1610.m_FrameInfluence = i1611[1]
  i1610.m_JitterScale = i1611[2]
  i1610.m_MipBias = i1611[3]
  i1610.m_VarianceClampScale = i1611[4]
  i1610.m_ContrastAdaptiveSharpening = i1611[5]
  return i1610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1613 = data
  i1612.enabled = !!i1613[0]
  i1612.type = i1613[1]
  i1612.color = new pc.Color(i1613[2], i1613[3], i1613[4], i1613[5])
  i1612.cullingMask = i1613[6]
  i1612.intensity = i1613[7]
  i1612.range = i1613[8]
  i1612.spotAngle = i1613[9]
  i1612.shadows = i1613[10]
  i1612.shadowNormalBias = i1613[11]
  i1612.shadowBias = i1613[12]
  i1612.shadowStrength = i1613[13]
  i1612.shadowResolution = i1613[14]
  i1612.lightmapBakeType = i1613[15]
  i1612.renderMode = i1613[16]
  request.r(i1613[17], i1613[18], 0, i1612, 'cookie')
  i1612.cookieSize = i1613[19]
  return i1612
}

Deserializers["UnityEngine.Rendering.Universal.UniversalAdditionalLightData"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.Rendering.Universal.UniversalAdditionalLightData' )
  var i1615 = data
  i1614.m_Version = i1615[0]
  i1614.m_UsePipelineSettings = !!i1615[1]
  i1614.m_AdditionalLightsShadowResolutionTier = i1615[2]
  i1614.m_LightLayerMask = i1615[3]
  i1614.m_RenderingLayers = i1615[4]
  i1614.m_CustomShadowLayers = !!i1615[5]
  i1614.m_ShadowLayerMask = i1615[6]
  i1614.m_ShadowRenderingLayers = i1615[7]
  i1614.m_LightCookieSize = new pc.Vec2( i1615[8], i1615[9] )
  i1614.m_LightCookieOffset = new pc.Vec2( i1615[10], i1615[11] )
  i1614.m_SoftShadowQuality = i1615[12]
  return i1614
}

Deserializers["UnityEngine.Rendering.Volume"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.Rendering.Volume' )
  var i1617 = data
  i1616.priority = i1617[0]
  i1616.blendDistance = i1617[1]
  i1616.weight = i1617[2]
  request.r(i1617[3], i1617[4], 0, i1616, 'sharedProfile')
  i1616.m_IsGlobal = !!i1617[5]
  return i1616
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1619 = data
  request.r(i1619[0], i1619[1], 0, i1618, 'm_FirstSelected')
  i1618.m_sendNavigationEvents = !!i1619[2]
  i1618.m_DragThreshold = i1619[3]
  return i1618
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1621 = data
  i1620.m_HorizontalAxis = i1621[0]
  i1620.m_VerticalAxis = i1621[1]
  i1620.m_SubmitButton = i1621[2]
  i1620.m_CancelButton = i1621[3]
  i1620.m_InputActionsPerSecond = i1621[4]
  i1620.m_RepeatDelay = i1621[5]
  i1620.m_ForceModuleActive = !!i1621[6]
  i1620.m_SendPointerHoverToParent = !!i1621[7]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1623 = data
  i1622.pivot = new pc.Vec2( i1623[0], i1623[1] )
  i1622.anchorMin = new pc.Vec2( i1623[2], i1623[3] )
  i1622.anchorMax = new pc.Vec2( i1623[4], i1623[5] )
  i1622.sizeDelta = new pc.Vec2( i1623[6], i1623[7] )
  i1622.anchoredPosition3D = new pc.Vec3( i1623[8], i1623[9], i1623[10] )
  i1622.rotation = new pc.Quat(i1623[11], i1623[12], i1623[13], i1623[14])
  i1622.scale = new pc.Vec3( i1623[15], i1623[16], i1623[17] )
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1625 = data
  i1624.enabled = !!i1625[0]
  i1624.planeDistance = i1625[1]
  i1624.referencePixelsPerUnit = i1625[2]
  i1624.isFallbackOverlay = !!i1625[3]
  i1624.renderMode = i1625[4]
  i1624.renderOrder = i1625[5]
  i1624.sortingLayerName = i1625[6]
  i1624.sortingOrder = i1625[7]
  i1624.scaleFactor = i1625[8]
  request.r(i1625[9], i1625[10], 0, i1624, 'worldCamera')
  i1624.overrideSorting = !!i1625[11]
  i1624.pixelPerfect = !!i1625[12]
  i1624.targetDisplay = i1625[13]
  i1624.overridePixelPerfect = !!i1625[14]
  return i1624
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1627 = data
  i1626.m_UiScaleMode = i1627[0]
  i1626.m_ReferencePixelsPerUnit = i1627[1]
  i1626.m_ScaleFactor = i1627[2]
  i1626.m_ReferenceResolution = new pc.Vec2( i1627[3], i1627[4] )
  i1626.m_ScreenMatchMode = i1627[5]
  i1626.m_MatchWidthOrHeight = i1627[6]
  i1626.m_PhysicalUnit = i1627[7]
  i1626.m_FallbackScreenDPI = i1627[8]
  i1626.m_DefaultSpriteDPI = i1627[9]
  i1626.m_DynamicPixelsPerUnit = i1627[10]
  i1626.m_PresetInfoIsWorld = !!i1627[11]
  return i1626
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1629 = data
  i1628.m_IgnoreReversedGraphics = !!i1629[0]
  i1628.m_BlockingObjects = i1629[1]
  i1628.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1629[2] )
  return i1628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1631 = data
  i1630.cullTransparentMesh = !!i1631[0]
  return i1630
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.UI.Image' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'm_Sprite')
  i1632.m_Type = i1633[2]
  i1632.m_PreserveAspect = !!i1633[3]
  i1632.m_FillCenter = !!i1633[4]
  i1632.m_FillMethod = i1633[5]
  i1632.m_FillAmount = i1633[6]
  i1632.m_FillClockwise = !!i1633[7]
  i1632.m_FillOrigin = i1633[8]
  i1632.m_UseSpriteMesh = !!i1633[9]
  i1632.m_PixelsPerUnitMultiplier = i1633[10]
  request.r(i1633[11], i1633[12], 0, i1632, 'm_Material')
  i1632.m_Maskable = !!i1633[13]
  i1632.m_Color = new pc.Color(i1633[14], i1633[15], i1633[16], i1633[17])
  i1632.m_RaycastTarget = !!i1633[18]
  i1632.m_RaycastPadding = new pc.Vec4( i1633[19], i1633[20], i1633[21], i1633[22] )
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1635 = data
  i1634.center = new pc.Vec3( i1635[0], i1635[1], i1635[2] )
  i1634.size = new pc.Vec3( i1635[3], i1635[4], i1635[5] )
  i1634.enabled = !!i1635[6]
  i1634.isTrigger = !!i1635[7]
  request.r(i1635[8], i1635[9], 0, i1634, 'material')
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1637 = data
  i1636.mass = i1637[0]
  i1636.drag = i1637[1]
  i1636.angularDrag = i1637[2]
  i1636.useGravity = !!i1637[3]
  i1636.isKinematic = !!i1637[4]
  i1636.constraints = i1637[5]
  i1636.maxAngularVelocity = i1637[6]
  i1636.collisionDetectionMode = i1637[7]
  i1636.interpolation = i1637[8]
  return i1636
}

Deserializers["_GameManager"] = function (request, data, root) {
  var i1638 = root || request.c( '_GameManager' )
  var i1639 = data
  i1638.isGameOver = i1639[0]
  request.r(i1639[1], i1639[2], 0, i1638, 'logo')
  return i1638
}

Deserializers["MouseController"] = function (request, data, root) {
  var i1640 = root || request.c( 'MouseController' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'selectedObject')
  request.r(i1641[2], i1641[3], 0, i1640, 'prevParent')
  request.r(i1641[4], i1641[5], 0, i1640, 'guideText')
  i1640.objectPrevPos = new pc.Vec3( i1641[6], i1641[7], i1641[8] )
  i1640.isDragging = !!i1641[9]
  request.r(i1641[10], i1641[11], 0, i1640, 'matchController')
  return i1640
}

Deserializers["MatchController"] = function (request, data, root) {
  var i1642 = root || request.c( 'MatchController' )
  var i1643 = data
  var i1645 = i1643[0]
  var i1644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1645.length; i += 2) {
  request.r(i1645[i + 0], i1645[i + 1], 1, i1644, '')
  }
  i1642.case1 = i1644
  var i1647 = i1643[1]
  var i1646 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1647.length; i += 2) {
  request.r(i1647[i + 0], i1647[i + 1], 1, i1646, '')
  }
  i1642.case2 = i1646
  var i1649 = i1643[2]
  var i1648 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1649.length; i += 2) {
  request.r(i1649[i + 0], i1649[i + 1], 1, i1648, '')
  }
  i1642.case3 = i1648
  var i1651 = i1643[3]
  var i1650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1651.length; i += 2) {
  request.r(i1651[i + 0], i1651[i + 1], 1, i1650, '')
  }
  i1642.case4 = i1650
  var i1653 = i1643[4]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1653.length; i += 2) {
  request.r(i1653[i + 0], i1653[i + 1], 1, i1652, '')
  }
  i1642.case5 = i1652
  var i1655 = i1643[5]
  var i1654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1655.length; i += 2) {
  request.r(i1655[i + 0], i1655[i + 1], 1, i1654, '')
  }
  i1642.case6 = i1654
  var i1657 = i1643[6]
  var i1656 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 1, i1656, '')
  }
  i1642.case7 = i1656
  var i1659 = i1643[7]
  var i1658 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1659.length; i += 2) {
  request.r(i1659[i + 0], i1659[i + 1], 1, i1658, '')
  }
  i1642.case8 = i1658
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i1662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i1663 = data
  i1662.enabled = !!i1663[0]
  i1662.isTrigger = !!i1663[1]
  request.r(i1663[2], i1663[3], 0, i1662, 'material')
  request.r(i1663[4], i1663[5], 0, i1662, 'sharedMesh')
  i1662.convex = !!i1663[6]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1665 = data
  i1664.ambientIntensity = i1665[0]
  i1664.reflectionIntensity = i1665[1]
  i1664.ambientMode = i1665[2]
  i1664.ambientLight = new pc.Color(i1665[3], i1665[4], i1665[5], i1665[6])
  i1664.ambientSkyColor = new pc.Color(i1665[7], i1665[8], i1665[9], i1665[10])
  i1664.ambientGroundColor = new pc.Color(i1665[11], i1665[12], i1665[13], i1665[14])
  i1664.ambientEquatorColor = new pc.Color(i1665[15], i1665[16], i1665[17], i1665[18])
  i1664.fogColor = new pc.Color(i1665[19], i1665[20], i1665[21], i1665[22])
  i1664.fogEndDistance = i1665[23]
  i1664.fogStartDistance = i1665[24]
  i1664.fogDensity = i1665[25]
  i1664.fog = !!i1665[26]
  request.r(i1665[27], i1665[28], 0, i1664, 'skybox')
  i1664.fogMode = i1665[29]
  var i1667 = i1665[30]
  var i1666 = []
  for(var i = 0; i < i1667.length; i += 1) {
    i1666.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1667[i + 0]) );
  }
  i1664.lightmaps = i1666
  i1664.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1665[31], i1664.lightProbes)
  i1664.lightmapsMode = i1665[32]
  i1664.mixedBakeMode = i1665[33]
  i1664.environmentLightingMode = i1665[34]
  i1664.ambientProbe = new pc.SphericalHarmonicsL2(i1665[35])
  i1664.referenceAmbientProbe = new pc.SphericalHarmonicsL2(i1665[36])
  i1664.useReferenceAmbientProbe = !!i1665[37]
  request.r(i1665[38], i1665[39], 0, i1664, 'customReflection')
  request.r(i1665[40], i1665[41], 0, i1664, 'defaultReflection')
  i1664.defaultReflectionMode = i1665[42]
  i1664.defaultReflectionResolution = i1665[43]
  i1664.sunLightObjectId = i1665[44]
  i1664.pixelLightCount = i1665[45]
  i1664.defaultReflectionHDR = !!i1665[46]
  i1664.hasLightDataAsset = !!i1665[47]
  i1664.hasManualGenerate = !!i1665[48]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1671 = data
  request.r(i1671[0], i1671[1], 0, i1670, 'lightmapColor')
  request.r(i1671[2], i1671[3], 0, i1670, 'lightmapDirection')
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1672 = root || new UnityEngine.LightProbes()
  var i1673 = data
  return i1672
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerCanvas"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerCanvas' )
  var i1681 = data
  request.r(i1681[0], i1681[1], 0, i1680, 'panelPrefab')
  var i1683 = i1681[2]
  var i1682 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIPrefabBundle')))
  for(var i = 0; i < i1683.length; i += 1) {
    i1682.add(request.d('UnityEngine.Rendering.UI.DebugUIPrefabBundle', i1683[i + 0]));
  }
  i1680.prefabs = i1682
  return i1680
}

Deserializers["UnityEngine.Rendering.UI.DebugUIPrefabBundle"] = function (request, data, root) {
  var i1686 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIPrefabBundle' )
  var i1687 = data
  i1686.type = i1687[0]
  request.r(i1687[1], i1687[2], 0, i1686, 'prefab')
  return i1686
}

Deserializers["UnityEngine.UI.VerticalLayoutGroup"] = function (request, data, root) {
  var i1688 = root || request.c( 'UnityEngine.UI.VerticalLayoutGroup' )
  var i1689 = data
  i1688.m_Spacing = i1689[0]
  i1688.m_ChildForceExpandWidth = !!i1689[1]
  i1688.m_ChildForceExpandHeight = !!i1689[2]
  i1688.m_ChildControlWidth = !!i1689[3]
  i1688.m_ChildControlHeight = !!i1689[4]
  i1688.m_ChildScaleWidth = !!i1689[5]
  i1688.m_ChildScaleHeight = !!i1689[6]
  i1688.m_ReverseArrangement = !!i1689[7]
  i1688.m_Padding = UnityEngine.RectOffset.FromPaddings(i1689[8], i1689[9], i1689[10], i1689[11])
  i1688.m_ChildAlignment = i1689[12]
  return i1688
}

Deserializers["UnityEngine.UI.ContentSizeFitter"] = function (request, data, root) {
  var i1690 = root || request.c( 'UnityEngine.UI.ContentSizeFitter' )
  var i1691 = data
  i1690.m_HorizontalFit = i1691[0]
  i1690.m_VerticalFit = i1691[1]
  return i1690
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerContainer"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerContainer' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'contentHolder')
  return i1692
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPanel"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPanel' )
  var i1695 = data
  request.r(i1695[0], i1695[1], 0, i1694, 'nameLabel')
  request.r(i1695[2], i1695[3], 0, i1694, 'scrollRect')
  request.r(i1695[4], i1695[5], 0, i1694, 'viewport')
  request.r(i1695[6], i1695[7], 0, i1694, 'Canvas')
  return i1694
}

Deserializers["UnityEngine.UI.LayoutElement"] = function (request, data, root) {
  var i1696 = root || request.c( 'UnityEngine.UI.LayoutElement' )
  var i1697 = data
  i1696.m_IgnoreLayout = !!i1697[0]
  i1696.m_MinWidth = i1697[1]
  i1696.m_MinHeight = i1697[2]
  i1696.m_PreferredWidth = i1697[3]
  i1696.m_PreferredHeight = i1697[4]
  i1696.m_FlexibleWidth = i1697[5]
  i1696.m_FlexibleHeight = i1697[6]
  i1696.m_LayoutPriority = i1697[7]
  return i1696
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1698 = root || request.c( 'UnityEngine.UI.Button' )
  var i1699 = data
  i1698.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1699[0], i1698.m_OnClick)
  i1698.m_Navigation = request.d('UnityEngine.UI.Navigation', i1699[1], i1698.m_Navigation)
  i1698.m_Transition = i1699[2]
  i1698.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1699[3], i1698.m_Colors)
  i1698.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1699[4], i1698.m_SpriteState)
  i1698.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1699[5], i1698.m_AnimationTriggers)
  i1698.m_Interactable = !!i1699[6]
  request.r(i1699[7], i1699[8], 0, i1698, 'm_TargetGraphic')
  return i1698
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1701 = data
  i1700.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1701[0], i1700.m_PersistentCalls)
  return i1700
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1703 = data
  var i1705 = i1703[0]
  var i1704 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1705.length; i += 1) {
    i1704.add(request.d('UnityEngine.Events.PersistentCall', i1705[i + 0]));
  }
  i1702.m_Calls = i1704
  return i1702
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1709 = data
  request.r(i1709[0], i1709[1], 0, i1708, 'm_Target')
  i1708.m_TargetAssemblyTypeName = i1709[2]
  i1708.m_MethodName = i1709[3]
  i1708.m_Mode = i1709[4]
  i1708.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1709[5], i1708.m_Arguments)
  i1708.m_CallState = i1709[6]
  return i1708
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1711 = data
  request.r(i1711[0], i1711[1], 0, i1710, 'm_ObjectArgument')
  i1710.m_ObjectArgumentAssemblyTypeName = i1711[2]
  i1710.m_IntArgument = i1711[3]
  i1710.m_FloatArgument = i1711[4]
  i1710.m_StringArgument = i1711[5]
  i1710.m_BoolArgument = !!i1711[6]
  return i1710
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1713 = data
  i1712.m_Mode = i1713[0]
  i1712.m_WrapAround = !!i1713[1]
  request.r(i1713[2], i1713[3], 0, i1712, 'm_SelectOnUp')
  request.r(i1713[4], i1713[5], 0, i1712, 'm_SelectOnDown')
  request.r(i1713[6], i1713[7], 0, i1712, 'm_SelectOnLeft')
  request.r(i1713[8], i1713[9], 0, i1712, 'm_SelectOnRight')
  return i1712
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1715 = data
  i1714.m_NormalColor = new pc.Color(i1715[0], i1715[1], i1715[2], i1715[3])
  i1714.m_HighlightedColor = new pc.Color(i1715[4], i1715[5], i1715[6], i1715[7])
  i1714.m_PressedColor = new pc.Color(i1715[8], i1715[9], i1715[10], i1715[11])
  i1714.m_SelectedColor = new pc.Color(i1715[12], i1715[13], i1715[14], i1715[15])
  i1714.m_DisabledColor = new pc.Color(i1715[16], i1715[17], i1715[18], i1715[19])
  i1714.m_ColorMultiplier = i1715[20]
  i1714.m_FadeDuration = i1715[21]
  return i1714
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1716 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1717 = data
  request.r(i1717[0], i1717[1], 0, i1716, 'm_HighlightedSprite')
  request.r(i1717[2], i1717[3], 0, i1716, 'm_PressedSprite')
  request.r(i1717[4], i1717[5], 0, i1716, 'm_SelectedSprite')
  request.r(i1717[6], i1717[7], 0, i1716, 'm_DisabledSprite')
  return i1716
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1718 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1719 = data
  i1718.m_NormalTrigger = i1719[0]
  i1718.m_HighlightedTrigger = i1719[1]
  i1718.m_PressedTrigger = i1719[2]
  i1718.m_SelectedTrigger = i1719[3]
  i1718.m_DisabledTrigger = i1719[4]
  return i1718
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.UI.Text' )
  var i1721 = data
  i1720.m_FontData = request.d('UnityEngine.UI.FontData', i1721[0], i1720.m_FontData)
  i1720.m_Text = i1721[1]
  request.r(i1721[2], i1721[3], 0, i1720, 'm_Material')
  i1720.m_Maskable = !!i1721[4]
  i1720.m_Color = new pc.Color(i1721[5], i1721[6], i1721[7], i1721[8])
  i1720.m_RaycastTarget = !!i1721[9]
  i1720.m_RaycastPadding = new pc.Vec4( i1721[10], i1721[11], i1721[12], i1721[13] )
  return i1720
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1723 = data
  request.r(i1723[0], i1723[1], 0, i1722, 'm_Font')
  i1722.m_FontSize = i1723[2]
  i1722.m_FontStyle = i1723[3]
  i1722.m_BestFit = !!i1723[4]
  i1722.m_MinSize = i1723[5]
  i1722.m_MaxSize = i1723[6]
  i1722.m_Alignment = i1723[7]
  i1722.m_AlignByGeometry = !!i1723[8]
  i1722.m_RichText = !!i1723[9]
  i1722.m_HorizontalOverflow = i1723[10]
  i1722.m_VerticalOverflow = i1723[11]
  i1722.m_LineSpacing = i1723[12]
  return i1722
}

Deserializers["UnityEngine.UI.ScrollRect"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.ScrollRect' )
  var i1725 = data
  request.r(i1725[0], i1725[1], 0, i1724, 'm_Content')
  i1724.m_Horizontal = !!i1725[2]
  i1724.m_Vertical = !!i1725[3]
  i1724.m_MovementType = i1725[4]
  i1724.m_Elasticity = i1725[5]
  i1724.m_Inertia = !!i1725[6]
  i1724.m_DecelerationRate = i1725[7]
  i1724.m_ScrollSensitivity = i1725[8]
  request.r(i1725[9], i1725[10], 0, i1724, 'm_Viewport')
  request.r(i1725[11], i1725[12], 0, i1724, 'm_HorizontalScrollbar')
  request.r(i1725[13], i1725[14], 0, i1724, 'm_VerticalScrollbar')
  i1724.m_HorizontalScrollbarVisibility = i1725[15]
  i1724.m_VerticalScrollbarVisibility = i1725[16]
  i1724.m_HorizontalScrollbarSpacing = i1725[17]
  i1724.m_VerticalScrollbarSpacing = i1725[18]
  i1724.m_OnValueChanged = request.d('UnityEngine.UI.ScrollRect+ScrollRectEvent', i1725[19], i1724.m_OnValueChanged)
  return i1724
}

Deserializers["UnityEngine.UI.ScrollRect+ScrollRectEvent"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.UI.ScrollRect+ScrollRectEvent' )
  var i1727 = data
  i1726.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1727[0], i1726.m_PersistentCalls)
  return i1726
}

Deserializers["UnityEngine.UI.Mask"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.UI.Mask' )
  var i1729 = data
  i1728.m_ShowMaskGraphic = !!i1729[0]
  return i1728
}

Deserializers["UnityEngine.UI.Scrollbar"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.UI.Scrollbar' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_HandleRect')
  i1730.m_Direction = i1731[2]
  i1730.m_Value = i1731[3]
  i1730.m_Size = i1731[4]
  i1730.m_NumberOfSteps = i1731[5]
  i1730.m_OnValueChanged = request.d('UnityEngine.UI.Scrollbar+ScrollEvent', i1731[6], i1730.m_OnValueChanged)
  i1730.m_Navigation = request.d('UnityEngine.UI.Navigation', i1731[7], i1730.m_Navigation)
  i1730.m_Transition = i1731[8]
  i1730.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1731[9], i1730.m_Colors)
  i1730.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1731[10], i1730.m_SpriteState)
  i1730.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1731[11], i1730.m_AnimationTriggers)
  i1730.m_Interactable = !!i1731[12]
  request.r(i1731[13], i1731[14], 0, i1730, 'm_TargetGraphic')
  return i1730
}

Deserializers["UnityEngine.UI.Scrollbar+ScrollEvent"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.UI.Scrollbar+ScrollEvent' )
  var i1733 = data
  i1732.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1733[0], i1732.m_PersistentCalls)
  return i1732
}

Deserializers["UnityEngine.EventSystems.EventTrigger"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.EventSystems.EventTrigger' )
  var i1735 = data
  var i1737 = i1735[0]
  var i1736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.EventSystems.EventTrigger+Entry')))
  for(var i = 0; i < i1737.length; i += 1) {
    i1736.add(request.d('UnityEngine.EventSystems.EventTrigger+Entry', i1737[i + 0]));
  }
  i1734.m_Delegates = i1736
  return i1734
}

Deserializers["UnityEngine.EventSystems.EventTrigger+Entry"] = function (request, data, root) {
  var i1740 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+Entry' )
  var i1741 = data
  i1740.eventID = i1741[0]
  i1740.callback = request.d('UnityEngine.EventSystems.EventTrigger+TriggerEvent', i1741[1], i1740.callback)
  return i1740
}

Deserializers["UnityEngine.EventSystems.EventTrigger+TriggerEvent"] = function (request, data, root) {
  var i1742 = root || request.c( 'UnityEngine.EventSystems.EventTrigger+TriggerEvent' )
  var i1743 = data
  i1742.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1743[0], i1742.m_PersistentCalls)
  return i1742
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValue"] = function (request, data, root) {
  var i1744 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValue' )
  var i1745 = data
  request.r(i1745[0], i1745[1], 0, i1744, 'nameLabel')
  request.r(i1745[2], i1745[3], 0, i1744, 'valueLabel')
  i1744.colorDefault = new pc.Color(i1745[4], i1745[5], i1745[6], i1745[7])
  i1744.colorSelected = new pc.Color(i1745[8], i1745[9], i1745[10], i1745[11])
  return i1744
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggle"] = function (request, data, root) {
  var i1746 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggle' )
  var i1747 = data
  request.r(i1747[0], i1747[1], 0, i1746, 'nameLabel')
  request.r(i1747[2], i1747[3], 0, i1746, 'valueToggle')
  request.r(i1747[4], i1747[5], 0, i1746, 'checkmarkImage')
  i1746.colorDefault = new pc.Color(i1747[6], i1747[7], i1747[8], i1747[9])
  i1746.colorSelected = new pc.Color(i1747[10], i1747[11], i1747[12], i1747[13])
  return i1746
}

Deserializers["UnityEngine.UI.Toggle"] = function (request, data, root) {
  var i1748 = root || request.c( 'UnityEngine.UI.Toggle' )
  var i1749 = data
  i1748.toggleTransition = i1749[0]
  request.r(i1749[1], i1749[2], 0, i1748, 'graphic')
  i1748.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1749[3], i1748.onValueChanged)
  request.r(i1749[4], i1749[5], 0, i1748, 'm_Group')
  i1748.m_IsOn = !!i1749[6]
  i1748.m_Navigation = request.d('UnityEngine.UI.Navigation', i1749[7], i1748.m_Navigation)
  i1748.m_Transition = i1749[8]
  i1748.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1749[9], i1748.m_Colors)
  i1748.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1749[10], i1748.m_SpriteState)
  i1748.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1749[11], i1748.m_AnimationTriggers)
  i1748.m_Interactable = !!i1749[12]
  request.r(i1749[13], i1749[14], 0, i1748, 'm_TargetGraphic')
  return i1748
}

Deserializers["UnityEngine.UI.Toggle+ToggleEvent"] = function (request, data, root) {
  var i1750 = root || request.c( 'UnityEngine.UI.Toggle+ToggleEvent' )
  var i1751 = data
  i1750.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1751[0], i1750.m_PersistentCalls)
  return i1750
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIntField"] = function (request, data, root) {
  var i1752 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIntField' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'nameLabel')
  request.r(i1753[2], i1753[3], 0, i1752, 'valueLabel')
  i1752.colorDefault = new pc.Color(i1753[4], i1753[5], i1753[6], i1753[7])
  i1752.colorSelected = new pc.Color(i1753[8], i1753[9], i1753[10], i1753[11])
  return i1752
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerUIntField"] = function (request, data, root) {
  var i1754 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerUIntField' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'nameLabel')
  request.r(i1755[2], i1755[3], 0, i1754, 'valueLabel')
  i1754.colorDefault = new pc.Color(i1755[4], i1755[5], i1755[6], i1755[7])
  i1754.colorSelected = new pc.Color(i1755[8], i1755[9], i1755[10], i1755[11])
  return i1754
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFloatField"] = function (request, data, root) {
  var i1756 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFloatField' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'nameLabel')
  request.r(i1757[2], i1757[3], 0, i1756, 'valueLabel')
  i1756.colorDefault = new pc.Color(i1757[4], i1757[5], i1757[6], i1757[7])
  i1756.colorSelected = new pc.Color(i1757[8], i1757[9], i1757[10], i1757[11])
  return i1756
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumField"] = function (request, data, root) {
  var i1758 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumField' )
  var i1759 = data
  request.r(i1759[0], i1759[1], 0, i1758, 'nextButtonText')
  request.r(i1759[2], i1759[3], 0, i1758, 'previousButtonText')
  request.r(i1759[4], i1759[5], 0, i1758, 'nameLabel')
  request.r(i1759[6], i1759[7], 0, i1758, 'valueLabel')
  i1758.colorDefault = new pc.Color(i1759[8], i1759[9], i1759[10], i1759[11])
  i1758.colorSelected = new pc.Color(i1759[12], i1759[13], i1759[14], i1759[15])
  return i1758
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerButton"] = function (request, data, root) {
  var i1760 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerButton' )
  var i1761 = data
  request.r(i1761[0], i1761[1], 0, i1760, 'nameLabel')
  i1760.colorDefault = new pc.Color(i1761[2], i1761[3], i1761[4], i1761[5])
  i1760.colorSelected = new pc.Color(i1761[6], i1761[7], i1761[8], i1761[9])
  return i1760
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerFoldout"] = function (request, data, root) {
  var i1762 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerFoldout' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'nameLabel')
  request.r(i1763[2], i1763[3], 0, i1762, 'valueToggle')
  i1762.colorDefault = new pc.Color(i1763[4], i1763[5], i1763[6], i1763[7])
  i1762.colorSelected = new pc.Color(i1763[8], i1763[9], i1763[10], i1763[11])
  return i1762
}

Deserializers["UnityEngine.Rendering.UI.UIFoldout"] = function (request, data, root) {
  var i1764 = root || request.c( 'UnityEngine.Rendering.UI.UIFoldout' )
  var i1765 = data
  i1764.toggleTransition = i1765[0]
  request.r(i1765[1], i1765[2], 0, i1764, 'graphic')
  i1764.onValueChanged = request.d('UnityEngine.UI.Toggle+ToggleEvent', i1765[3], i1764.onValueChanged)
  request.r(i1765[4], i1765[5], 0, i1764, 'content')
  request.r(i1765[6], i1765[7], 0, i1764, 'arrowOpened')
  request.r(i1765[8], i1765[9], 0, i1764, 'arrowClosed')
  request.r(i1765[10], i1765[11], 0, i1764, 'm_Group')
  i1764.m_IsOn = !!i1765[12]
  i1764.m_Navigation = request.d('UnityEngine.UI.Navigation', i1765[13], i1764.m_Navigation)
  i1764.m_Transition = i1765[14]
  i1764.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1765[15], i1764.m_Colors)
  i1764.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1765[16], i1764.m_SpriteState)
  i1764.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1765[17], i1764.m_AnimationTriggers)
  i1764.m_Interactable = !!i1765[18]
  request.r(i1765[19], i1765[20], 0, i1764, 'm_TargetGraphic')
  return i1764
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerColor"] = function (request, data, root) {
  var i1766 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerColor' )
  var i1767 = data
  request.r(i1767[0], i1767[1], 0, i1766, 'nameLabel')
  request.r(i1767[2], i1767[3], 0, i1766, 'valueToggle')
  request.r(i1767[4], i1767[5], 0, i1766, 'colorImage')
  request.r(i1767[6], i1767[7], 0, i1766, 'fieldR')
  request.r(i1767[8], i1767[9], 0, i1766, 'fieldG')
  request.r(i1767[10], i1767[11], 0, i1766, 'fieldB')
  request.r(i1767[12], i1767[13], 0, i1766, 'fieldA')
  i1766.colorDefault = new pc.Color(i1767[14], i1767[15], i1767[16], i1767[17])
  i1766.colorSelected = new pc.Color(i1767[18], i1767[19], i1767[20], i1767[21])
  return i1766
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField"] = function (request, data, root) {
  var i1768 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField' )
  var i1769 = data
  request.r(i1769[0], i1769[1], 0, i1768, 'nameLabel')
  request.r(i1769[2], i1769[3], 0, i1768, 'valueLabel')
  i1768.colorDefault = new pc.Color(i1769[4], i1769[5], i1769[6], i1769[7])
  i1768.colorSelected = new pc.Color(i1769[8], i1769[9], i1769[10], i1769[11])
  return i1768
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector2"] = function (request, data, root) {
  var i1770 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector2' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'nameLabel')
  request.r(i1771[2], i1771[3], 0, i1770, 'valueToggle')
  request.r(i1771[4], i1771[5], 0, i1770, 'fieldX')
  request.r(i1771[6], i1771[7], 0, i1770, 'fieldY')
  i1770.colorDefault = new pc.Color(i1771[8], i1771[9], i1771[10], i1771[11])
  i1770.colorSelected = new pc.Color(i1771[12], i1771[13], i1771[14], i1771[15])
  return i1770
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector3"] = function (request, data, root) {
  var i1772 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector3' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'nameLabel')
  request.r(i1773[2], i1773[3], 0, i1772, 'valueToggle')
  request.r(i1773[4], i1773[5], 0, i1772, 'fieldX')
  request.r(i1773[6], i1773[7], 0, i1772, 'fieldY')
  request.r(i1773[8], i1773[9], 0, i1772, 'fieldZ')
  i1772.colorDefault = new pc.Color(i1773[10], i1773[11], i1773[12], i1773[13])
  i1772.colorSelected = new pc.Color(i1773[14], i1773[15], i1773[16], i1773[17])
  return i1772
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVector4"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVector4' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'nameLabel')
  request.r(i1775[2], i1775[3], 0, i1774, 'valueToggle')
  request.r(i1775[4], i1775[5], 0, i1774, 'fieldX')
  request.r(i1775[6], i1775[7], 0, i1774, 'fieldY')
  request.r(i1775[8], i1775[9], 0, i1774, 'fieldZ')
  request.r(i1775[10], i1775[11], 0, i1774, 'fieldW')
  i1774.colorDefault = new pc.Color(i1775[12], i1775[13], i1775[14], i1775[15])
  i1774.colorSelected = new pc.Color(i1775[16], i1775[17], i1775[18], i1775[19])
  return i1774
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerVBox"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerVBox' )
  var i1777 = data
  i1776.colorDefault = new pc.Color(i1777[0], i1777[1], i1777[2], i1777[3])
  i1776.colorSelected = new pc.Color(i1777[4], i1777[5], i1777[6], i1777[7])
  return i1776
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i1778 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i1779 = data
  i1778.m_Spacing = i1779[0]
  i1778.m_ChildForceExpandWidth = !!i1779[1]
  i1778.m_ChildForceExpandHeight = !!i1779[2]
  i1778.m_ChildControlWidth = !!i1779[3]
  i1778.m_ChildControlHeight = !!i1779[4]
  i1778.m_ChildScaleWidth = !!i1779[5]
  i1778.m_ChildScaleHeight = !!i1779[6]
  i1778.m_ReverseArrangement = !!i1779[7]
  i1778.m_Padding = UnityEngine.RectOffset.FromPaddings(i1779[8], i1779[9], i1779[10], i1779[11])
  i1778.m_ChildAlignment = i1779[12]
  return i1778
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerHBox"] = function (request, data, root) {
  var i1780 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerHBox' )
  var i1781 = data
  i1780.colorDefault = new pc.Color(i1781[0], i1781[1], i1781[2], i1781[3])
  i1780.colorSelected = new pc.Color(i1781[4], i1781[5], i1781[6], i1781[7])
  return i1780
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerGroup"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerGroup' )
  var i1783 = data
  request.r(i1783[0], i1783[1], 0, i1782, 'nameLabel')
  request.r(i1783[2], i1783[3], 0, i1782, 'header')
  i1782.colorDefault = new pc.Color(i1783[4], i1783[5], i1783[6], i1783[7])
  i1782.colorSelected = new pc.Color(i1783[8], i1783[9], i1783[10], i1783[11])
  return i1782
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerBitField"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerBitField' )
  var i1785 = data
  request.r(i1785[0], i1785[1], 0, i1784, 'nameLabel')
  request.r(i1785[2], i1785[3], 0, i1784, 'valueToggle')
  var i1787 = i1785[4]
  var i1786 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle')))
  for(var i = 0; i < i1787.length; i += 2) {
  request.r(i1787[i + 0], i1787[i + 1], 1, i1786, '')
  }
  i1784.toggles = i1786
  i1784.colorDefault = new pc.Color(i1785[5], i1785[6], i1785[7], i1785[8])
  i1784.colorSelected = new pc.Color(i1785[9], i1785[10], i1785[11], i1785[12])
  return i1784
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle' )
  var i1791 = data
  request.r(i1791[0], i1791[1], 0, i1790, 'nameLabel')
  request.r(i1791[2], i1791[3], 0, i1790, 'valueToggle')
  request.r(i1791[4], i1791[5], 0, i1790, 'checkmarkImage')
  i1790.colorDefault = new pc.Color(i1791[6], i1791[7], i1791[8], i1791[9])
  i1790.colorSelected = new pc.Color(i1791[10], i1791[11], i1791[12], i1791[13])
  return i1790
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'nameLabel')
  request.r(i1793[2], i1793[3], 0, i1792, 'valueToggle')
  request.r(i1793[4], i1793[5], 0, i1792, 'checkmarkImage')
  i1792.colorDefault = new pc.Color(i1793[6], i1793[7], i1793[8], i1793[9])
  i1792.colorSelected = new pc.Color(i1793[10], i1793[11], i1793[12], i1793[13])
  return i1792
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory' )
  var i1795 = data
  request.r(i1795[0], i1795[1], 0, i1794, 'nextButtonText')
  request.r(i1795[2], i1795[3], 0, i1794, 'previousButtonText')
  request.r(i1795[4], i1795[5], 0, i1794, 'nameLabel')
  request.r(i1795[6], i1795[7], 0, i1794, 'valueLabel')
  i1794.colorDefault = new pc.Color(i1795[8], i1795[9], i1795[10], i1795[11])
  i1794.colorSelected = new pc.Color(i1795[12], i1795[13], i1795[14], i1795[15])
  return i1794
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerRow"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerRow' )
  var i1797 = data
  request.r(i1797[0], i1797[1], 0, i1796, 'nameLabel')
  request.r(i1797[2], i1797[3], 0, i1796, 'valueToggle')
  i1796.colorDefault = new pc.Color(i1797[4], i1797[5], i1797[6], i1797[7])
  i1796.colorSelected = new pc.Color(i1797[8], i1797[9], i1797[10], i1797[11])
  return i1796
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerMessageBox"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerMessageBox' )
  var i1799 = data
  request.r(i1799[0], i1799[1], 0, i1798, 'nameLabel')
  i1798.colorDefault = new pc.Color(i1799[2], i1799[3], i1799[4], i1799[5])
  i1798.colorSelected = new pc.Color(i1799[6], i1799[7], i1799[8], i1799[9])
  return i1798
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerProgressBar"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerProgressBar' )
  var i1801 = data
  request.r(i1801[0], i1801[1], 0, i1800, 'nameLabel')
  request.r(i1801[2], i1801[3], 0, i1800, 'valueLabel')
  request.r(i1801[4], i1801[5], 0, i1800, 'progressBarRect')
  i1800.colorDefault = new pc.Color(i1801[6], i1801[7], i1801[8], i1801[9])
  i1800.colorSelected = new pc.Color(i1801[10], i1801[11], i1801[12], i1801[13])
  return i1800
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerValueTuple"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerValueTuple' )
  var i1803 = data
  request.r(i1803[0], i1803[1], 0, i1802, 'nameLabel')
  request.r(i1803[2], i1803[3], 0, i1802, 'valueLabel')
  i1802.colorDefault = new pc.Color(i1803[4], i1803[5], i1803[6], i1803[7])
  i1802.colorSelected = new pc.Color(i1803[8], i1803[9], i1803[10], i1803[11])
  return i1802
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObject"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObject' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'nameLabel')
  request.r(i1805[2], i1805[3], 0, i1804, 'valueLabel')
  i1804.colorDefault = new pc.Color(i1805[4], i1805[5], i1805[6], i1805[7])
  i1804.colorSelected = new pc.Color(i1805[8], i1805[9], i1805[10], i1805[11])
  return i1804
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectList"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectList' )
  var i1807 = data
  request.r(i1807[0], i1807[1], 0, i1806, 'nextButtonText')
  request.r(i1807[2], i1807[3], 0, i1806, 'previousButtonText')
  request.r(i1807[4], i1807[5], 0, i1806, 'nameLabel')
  request.r(i1807[6], i1807[7], 0, i1806, 'valueLabel')
  i1806.colorDefault = new pc.Color(i1807[8], i1807[9], i1807[10], i1807[11])
  i1806.colorSelected = new pc.Color(i1807[12], i1807[13], i1807[14], i1807[15])
  return i1806
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'nextButtonText')
  request.r(i1809[2], i1809[3], 0, i1808, 'previousButtonText')
  request.r(i1809[4], i1809[5], 0, i1808, 'nameLabel')
  request.r(i1809[6], i1809[7], 0, i1808, 'valueLabel')
  i1808.colorDefault = new pc.Color(i1809[8], i1809[9], i1809[10], i1809[11])
  i1808.colorSelected = new pc.Color(i1809[12], i1809[13], i1809[14], i1809[15])
  return i1808
}

Deserializers["UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'panel')
  request.r(i1811[2], i1811[3], 0, i1810, 'valuePrefab')
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset' )
  var i1813 = data
  i1812.AdditionalLightsPerObjectLimit = i1813[0]
  i1812.AdditionalLightsRenderingMode = i1813[1]
  i1812.LightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1813[2], i1812.LightRenderingMode)
  i1812.ColorGradingLutSize = i1813[3]
  i1812.ColorGradingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode', i1813[4], i1812.ColorGradingMode)
  i1812.MainLightRenderingMode = request.d('Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode', i1813[5], i1812.MainLightRenderingMode)
  i1812.MainLightRenderingModeValue = i1813[6]
  i1812.SupportsMainLightShadows = !!i1813[7]
  i1812.MixedLightingSupported = !!i1813[8]
  i1812.MsaaQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality', i1813[9], i1812.MsaaQuality)
  i1812.MSAA = i1813[10]
  i1812.OpaqueDownsampling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Downsampling', i1813[11], i1812.OpaqueDownsampling)
  i1812.MainLightShadowmapResolution = request.d('Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution', i1813[12], i1812.MainLightShadowmapResolution)
  i1812.MainLightShadowmapResolutionValue = i1813[13]
  i1812.SupportsSoftShadows = !!i1813[14]
  i1812.SoftShadowQuality = request.d('Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality', i1813[15], i1812.SoftShadowQuality)
  i1812.SoftShadowQualityValue = i1813[16]
  i1812.ShadowDistance = i1813[17]
  i1812.ShadowCascadeCount = i1813[18]
  i1812.Cascade2Split = i1813[19]
  i1812.Cascade3Split = new pc.Vec2( i1813[20], i1813[21] )
  i1812.Cascade4Split = new pc.Vec3( i1813[22], i1813[23], i1813[24] )
  i1812.CascadeBorder = i1813[25]
  i1812.ShadowDepthBias = i1813[26]
  i1812.ShadowNormalBias = i1813[27]
  i1812.RenderScale = i1813[28]
  i1812.RequireDepthTexture = !!i1813[29]
  i1812.RequireOpaqueTexture = !!i1813[30]
  i1812.SupportsHDR = !!i1813[31]
  i1812.SupportsTerrainHoles = !!i1813[32]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode' )
  var i1815 = data
  i1814.Disabled = i1815[0]
  i1814.PerVertex = i1815[1]
  i1814.PerPixel = i1815[2]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode' )
  var i1817 = data
  i1816.LowDynamicRange = i1817[0]
  i1816.HighDynamicRange = i1817[1]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality' )
  var i1819 = data
  i1818.Disabled = i1819[0]
  i1818._2x = i1819[1]
  i1818._4x = i1819[2]
  i1818._8x = i1819[3]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Downsampling"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Downsampling' )
  var i1821 = data
  i1820.None = i1821[0]
  i1820._2xBilinear = i1821[1]
  i1820._4xBox = i1821[2]
  i1820._4xBilinear = i1821[3]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution' )
  var i1823 = data
  i1822._256 = i1823[0]
  i1822._512 = i1823[1]
  i1822._1024 = i1823[2]
  i1822._2048 = i1823[3]
  i1822._4096 = i1823[4]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality' )
  var i1825 = data
  i1824.UsePipelineSettings = i1825[0]
  i1824.Low = i1825[1]
  i1824.Medium = i1825[2]
  i1824.High = i1825[3]
  return i1824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1829[i + 0]));
  }
  i1826.ShaderCompilationErrors = i1828
  i1826.name = i1827[1]
  i1826.guid = i1827[2]
  var i1831 = i1827[3]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( i1831[i + 0] );
  }
  i1826.shaderDefinedKeywords = i1830
  var i1833 = i1827[4]
  var i1832 = []
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1833[i + 0]) );
  }
  i1826.passes = i1832
  var i1835 = i1827[5]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1835[i + 0]) );
  }
  i1826.usePasses = i1834
  var i1837 = i1827[6]
  var i1836 = []
  for(var i = 0; i < i1837.length; i += 1) {
    i1836.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1837[i + 0]) );
  }
  i1826.defaultParameterValues = i1836
  request.r(i1827[7], i1827[8], 0, i1826, 'unityFallbackShader')
  i1826.readDepth = !!i1827[9]
  i1826.isCreatedByShaderGraph = !!i1827[10]
  i1826.compiled = !!i1827[11]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1841 = data
  i1840.shaderName = i1841[0]
  i1840.errorMessage = i1841[1]
  return i1840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1846 = root || new pc.UnityShaderPass()
  var i1847 = data
  i1846.id = i1847[0]
  i1846.subShaderIndex = i1847[1]
  i1846.name = i1847[2]
  i1846.passType = i1847[3]
  i1846.grabPassTextureName = i1847[4]
  i1846.usePass = !!i1847[5]
  i1846.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[6], i1846.zTest)
  i1846.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[7], i1846.zWrite)
  i1846.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[8], i1846.culling)
  i1846.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1847[9], i1846.blending)
  i1846.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1847[10], i1846.alphaBlending)
  i1846.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[11], i1846.colorWriteMask)
  i1846.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[12], i1846.offsetUnits)
  i1846.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[13], i1846.offsetFactor)
  i1846.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[14], i1846.stencilRef)
  i1846.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[15], i1846.stencilReadMask)
  i1846.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1847[16], i1846.stencilWriteMask)
  i1846.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1847[17], i1846.stencilOp)
  i1846.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1847[18], i1846.stencilOpFront)
  i1846.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1847[19], i1846.stencilOpBack)
  var i1849 = i1847[20]
  var i1848 = []
  for(var i = 0; i < i1849.length; i += 1) {
    i1848.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1849[i + 0]) );
  }
  i1846.tags = i1848
  var i1851 = i1847[21]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( i1851[i + 0] );
  }
  i1846.passDefinedKeywords = i1850
  var i1853 = i1847[22]
  var i1852 = []
  for(var i = 0; i < i1853.length; i += 1) {
    i1852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1853[i + 0]) );
  }
  i1846.passDefinedKeywordGroups = i1852
  var i1855 = i1847[23]
  var i1854 = []
  for(var i = 0; i < i1855.length; i += 1) {
    i1854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1855[i + 0]) );
  }
  i1846.variants = i1854
  var i1857 = i1847[24]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1857[i + 0]) );
  }
  i1846.excludedVariants = i1856
  i1846.hasDepthReader = !!i1847[25]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1859 = data
  i1858.val = i1859[0]
  i1858.name = i1859[1]
  return i1858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1861 = data
  i1860.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1861[0], i1860.src)
  i1860.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1861[1], i1860.dst)
  i1860.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1861[2], i1860.op)
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1863 = data
  i1862.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[0], i1862.pass)
  i1862.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[1], i1862.fail)
  i1862.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[2], i1862.zFail)
  i1862.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1863[3], i1862.comp)
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1867 = data
  i1866.name = i1867[0]
  i1866.value = i1867[1]
  return i1866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1871 = data
  var i1873 = i1871[0]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( i1873[i + 0] );
  }
  i1870.keywords = i1872
  i1870.hasDiscard = !!i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1877 = data
  i1876.passId = i1877[0]
  i1876.subShaderIndex = i1877[1]
  var i1879 = i1877[2]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1876.keywords = i1878
  i1876.vertexProgram = i1877[3]
  i1876.fragmentProgram = i1877[4]
  i1876.exportedForWebGl2 = !!i1877[5]
  i1876.readDepth = !!i1877[6]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'shader')
  i1882.pass = i1883[2]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1887 = data
  i1886.name = i1887[0]
  i1886.type = i1887[1]
  i1886.value = new pc.Vec4( i1887[2], i1887[3], i1887[4], i1887[5] )
  i1886.textureValue = i1887[6]
  i1886.shaderPropertyFlag = i1887[7]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1889 = data
  i1888.name = i1889[0]
  request.r(i1889[1], i1889[2], 0, i1888, 'texture')
  i1888.aabb = i1889[3]
  i1888.vertices = i1889[4]
  i1888.triangles = i1889[5]
  i1888.textureRect = UnityEngine.Rect.MinMaxRect(i1889[6], i1889[7], i1889[8], i1889[9])
  i1888.packedRect = UnityEngine.Rect.MinMaxRect(i1889[10], i1889[11], i1889[12], i1889[13])
  i1888.border = new pc.Vec4( i1889[14], i1889[15], i1889[16], i1889[17] )
  i1888.transparency = i1889[18]
  i1888.bounds = i1889[19]
  i1888.pixelsPerUnit = i1889[20]
  i1888.textureWidth = i1889[21]
  i1888.textureHeight = i1889[22]
  i1888.nativeSize = new pc.Vec2( i1889[23], i1889[24] )
  i1888.pivot = new pc.Vec2( i1889[25], i1889[26] )
  i1888.textureRectOffset = new pc.Vec2( i1889[27], i1889[28] )
  return i1888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.ascent = i1891[1]
  i1890.originalLineHeight = i1891[2]
  i1890.fontSize = i1891[3]
  var i1893 = i1891[4]
  var i1892 = []
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1893[i + 0]) );
  }
  i1890.characterInfo = i1892
  request.r(i1891[5], i1891[6], 0, i1890, 'texture')
  i1890.originalFontSize = i1891[7]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1897 = data
  i1896.index = i1897[0]
  i1896.advance = i1897[1]
  i1896.bearing = i1897[2]
  i1896.glyphWidth = i1897[3]
  i1896.glyphHeight = i1897[4]
  i1896.minX = i1897[5]
  i1896.maxX = i1897[6]
  i1896.minY = i1897[7]
  i1896.maxY = i1897[8]
  i1896.uvBottomLeftX = i1897[9]
  i1896.uvBottomLeftY = i1897[10]
  i1896.uvBottomRightX = i1897[11]
  i1896.uvBottomRightY = i1897[12]
  i1896.uvTopLeftX = i1897[13]
  i1896.uvTopLeftY = i1897[14]
  i1896.uvTopRightX = i1897[15]
  i1896.uvTopRightY = i1897[16]
  return i1896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1899 = data
  i1898.name = i1899[0]
  i1898.bytes64 = i1899[1]
  i1898.data = i1899[2]
  return i1898
}

Deserializers["UnityEngine.Rendering.VolumeProfile"] = function (request, data, root) {
  var i1900 = root || request.c( 'UnityEngine.Rendering.VolumeProfile' )
  var i1901 = data
  var i1903 = i1901[0]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Rendering.VolumeComponent')))
  for(var i = 0; i < i1903.length; i += 2) {
  request.r(i1903[i + 0], i1903[i + 1], 1, i1902, '')
  }
  i1900.components = i1902
  return i1900
}

Deserializers["UnityEngine.Rendering.Universal.Tonemapping"] = function (request, data, root) {
  var i1906 = root || request.c( 'UnityEngine.Rendering.Universal.Tonemapping' )
  var i1907 = data
  i1906.mode = request.d('UnityEngine.Rendering.Universal.TonemappingModeParameter', i1907[0], i1906.mode)
  i1906.neutralHDRRangeReductionMode = request.d('UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter', i1907[1], i1906.neutralHDRRangeReductionMode)
  i1906.acesPreset = request.d('UnityEngine.Rendering.Universal.HDRACESPresetParameter', i1907[2], i1906.acesPreset)
  i1906.hueShiftAmount = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1907[3], i1906.hueShiftAmount)
  i1906.detectPaperWhite = request.d('UnityEngine.Rendering.BoolParameter', i1907[4], i1906.detectPaperWhite)
  i1906.paperWhite = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1907[5], i1906.paperWhite)
  i1906.detectBrightnessLimits = request.d('UnityEngine.Rendering.BoolParameter', i1907[6], i1906.detectBrightnessLimits)
  i1906.minNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1907[7], i1906.minNits)
  i1906.maxNits = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1907[8], i1906.maxNits)
  i1906.active = !!i1907[9]
  return i1906
}

Deserializers["UnityEngine.Rendering.Universal.TonemappingModeParameter"] = function (request, data, root) {
  var i1908 = root || request.c( 'UnityEngine.Rendering.Universal.TonemappingModeParameter' )
  var i1909 = data
  i1908.m_Value = i1909[0]
  i1908.m_OverrideState = !!i1909[1]
  return i1908
}

Deserializers["UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.Rendering.Universal.NeutralRangeReductionModeParameter' )
  var i1911 = data
  i1910.m_Value = i1911[0]
  i1910.m_OverrideState = !!i1911[1]
  return i1910
}

Deserializers["UnityEngine.Rendering.Universal.HDRACESPresetParameter"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.Rendering.Universal.HDRACESPresetParameter' )
  var i1913 = data
  i1912.m_Value = i1913[0]
  i1912.m_OverrideState = !!i1913[1]
  return i1912
}

Deserializers["UnityEngine.Rendering.ClampedFloatParameter"] = function (request, data, root) {
  var i1914 = root || request.c( 'UnityEngine.Rendering.ClampedFloatParameter' )
  var i1915 = data
  i1914.m_Value = i1915[0]
  i1914.m_OverrideState = !!i1915[1]
  return i1914
}

Deserializers["UnityEngine.Rendering.BoolParameter"] = function (request, data, root) {
  var i1916 = root || request.c( 'UnityEngine.Rendering.BoolParameter' )
  var i1917 = data
  i1916.m_Value = !!i1917[0]
  i1916.m_OverrideState = !!i1917[1]
  return i1916
}

Deserializers["UnityEngine.Rendering.Universal.Bloom"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.Rendering.Universal.Bloom' )
  var i1919 = data
  i1918.skipIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1919[0], i1918.skipIterations)
  i1918.threshold = request.d('UnityEngine.Rendering.MinFloatParameter', i1919[1], i1918.threshold)
  i1918.intensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1919[2], i1918.intensity)
  i1918.scatter = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1919[3], i1918.scatter)
  i1918.clamp = request.d('UnityEngine.Rendering.MinFloatParameter', i1919[4], i1918.clamp)
  i1918.tint = request.d('UnityEngine.Rendering.ColorParameter', i1919[5], i1918.tint)
  i1918.highQualityFiltering = request.d('UnityEngine.Rendering.BoolParameter', i1919[6], i1918.highQualityFiltering)
  i1918.downscale = request.d('UnityEngine.Rendering.Universal.DownscaleParameter', i1919[7], i1918.downscale)
  i1918.maxIterations = request.d('UnityEngine.Rendering.ClampedIntParameter', i1919[8], i1918.maxIterations)
  i1918.dirtTexture = request.d('UnityEngine.Rendering.TextureParameter', i1919[9], i1918.dirtTexture)
  i1918.dirtIntensity = request.d('UnityEngine.Rendering.MinFloatParameter', i1919[10], i1918.dirtIntensity)
  i1918.active = !!i1919[11]
  return i1918
}

Deserializers["UnityEngine.Rendering.ClampedIntParameter"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.Rendering.ClampedIntParameter' )
  var i1921 = data
  i1920.m_Value = i1921[0]
  i1920.m_OverrideState = !!i1921[1]
  return i1920
}

Deserializers["UnityEngine.Rendering.MinFloatParameter"] = function (request, data, root) {
  var i1922 = root || request.c( 'UnityEngine.Rendering.MinFloatParameter' )
  var i1923 = data
  i1922.m_Value = i1923[0]
  i1922.m_OverrideState = !!i1923[1]
  return i1922
}

Deserializers["UnityEngine.Rendering.ColorParameter"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.Rendering.ColorParameter' )
  var i1925 = data
  i1924.m_Value = new pc.Color(i1925[0], i1925[1], i1925[2], i1925[3])
  i1924.m_OverrideState = !!i1925[4]
  return i1924
}

Deserializers["UnityEngine.Rendering.Universal.DownscaleParameter"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.Rendering.Universal.DownscaleParameter' )
  var i1927 = data
  i1926.m_Value = i1927[0]
  i1926.m_OverrideState = !!i1927[1]
  return i1926
}

Deserializers["UnityEngine.Rendering.TextureParameter"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.Rendering.TextureParameter' )
  var i1929 = data
  i1928.dimension = i1929[0]
  request.r(i1929[1], i1929[2], 0, i1928, 'm_Value')
  i1928.m_OverrideState = !!i1929[3]
  return i1928
}

Deserializers["UnityEngine.Rendering.Universal.Vignette"] = function (request, data, root) {
  var i1930 = root || request.c( 'UnityEngine.Rendering.Universal.Vignette' )
  var i1931 = data
  i1930.color = request.d('UnityEngine.Rendering.ColorParameter', i1931[0], i1930.color)
  i1930.center = request.d('UnityEngine.Rendering.Vector2Parameter', i1931[1], i1930.center)
  i1930.intensity = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1931[2], i1930.intensity)
  i1930.smoothness = request.d('UnityEngine.Rendering.ClampedFloatParameter', i1931[3], i1930.smoothness)
  i1930.rounded = request.d('UnityEngine.Rendering.BoolParameter', i1931[4], i1930.rounded)
  i1930.active = !!i1931[5]
  return i1930
}

Deserializers["UnityEngine.Rendering.Vector2Parameter"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.Rendering.Vector2Parameter' )
  var i1933 = data
  i1932.m_Value = new pc.Vec2( i1933[0], i1933[1] )
  i1932.m_OverrideState = !!i1933[2]
  return i1932
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1934 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1935 = data
  i1934.useSafeMode = !!i1935[0]
  i1934.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1935[1], i1934.safeModeOptions)
  i1934.timeScale = i1935[2]
  i1934.unscaledTimeScale = i1935[3]
  i1934.useSmoothDeltaTime = !!i1935[4]
  i1934.maxSmoothUnscaledTime = i1935[5]
  i1934.rewindCallbackMode = i1935[6]
  i1934.showUnityEditorReport = !!i1935[7]
  i1934.logBehaviour = i1935[8]
  i1934.drawGizmos = !!i1935[9]
  i1934.defaultRecyclable = !!i1935[10]
  i1934.defaultAutoPlay = i1935[11]
  i1934.defaultUpdateType = i1935[12]
  i1934.defaultTimeScaleIndependent = !!i1935[13]
  i1934.defaultEaseType = i1935[14]
  i1934.defaultEaseOvershootOrAmplitude = i1935[15]
  i1934.defaultEasePeriod = i1935[16]
  i1934.defaultAutoKill = !!i1935[17]
  i1934.defaultLoopType = i1935[18]
  i1934.debugMode = !!i1935[19]
  i1934.debugStoreTargetId = !!i1935[20]
  i1934.showPreviewPanel = !!i1935[21]
  i1934.storeSettingsLocation = i1935[22]
  i1934.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1935[23], i1934.modules)
  i1934.createASMDEF = !!i1935[24]
  i1934.showPlayingTweens = !!i1935[25]
  i1934.showPausedTweens = !!i1935[26]
  return i1934
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1936 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1937 = data
  i1936.logBehaviour = i1937[0]
  i1936.nestedTweenFailureBehaviour = i1937[1]
  return i1936
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1938 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1939 = data
  i1938.showPanel = !!i1939[0]
  i1938.audioEnabled = !!i1939[1]
  i1938.physicsEnabled = !!i1939[2]
  i1938.physics2DEnabled = !!i1939[3]
  i1938.spriteEnabled = !!i1939[4]
  i1938.uiEnabled = !!i1939[5]
  i1938.textMeshProEnabled = !!i1939[6]
  i1938.tk2DEnabled = !!i1939[7]
  i1938.deAudioEnabled = !!i1939[8]
  i1938.deUnityExtendedEnabled = !!i1939[9]
  i1938.epoOutlineEnabled = !!i1939[10]
  return i1938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1941 = data
  var i1943 = i1941[0]
  var i1942 = []
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1943[i + 0]) );
  }
  i1940.files = i1942
  i1940.componentToPrefabIds = i1941[1]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1947 = data
  i1946.path = i1947[0]
  request.r(i1947[1], i1947[2], 0, i1946, 'unityObject')
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1949 = data
  var i1951 = i1949[0]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1951[i + 0]) );
  }
  i1948.scriptsExecutionOrder = i1950
  var i1953 = i1949[1]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1953[i + 0]) );
  }
  i1948.sortingLayers = i1952
  var i1955 = i1949[2]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 1) {
    i1954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1955[i + 0]) );
  }
  i1948.cullingLayers = i1954
  i1948.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1949[3], i1948.timeSettings)
  i1948.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1949[4], i1948.physicsSettings)
  i1948.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1949[5], i1948.physics2DSettings)
  i1948.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1949[6], i1948.qualitySettings)
  i1948.enableRealtimeShadows = !!i1949[7]
  i1948.enableAutoInstancing = !!i1949[8]
  i1948.enableDynamicBatching = !!i1949[9]
  i1948.lightmapEncodingQuality = i1949[10]
  i1948.desiredColorSpace = i1949[11]
  var i1957 = i1949[12]
  var i1956 = []
  for(var i = 0; i < i1957.length; i += 1) {
    i1956.push( i1957[i + 0] );
  }
  i1948.allTags = i1956
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.value = i1961[1]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1965 = data
  i1964.id = i1965[0]
  i1964.name = i1965[1]
  i1964.value = i1965[2]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1969 = data
  i1968.id = i1969[0]
  i1968.name = i1969[1]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1971 = data
  i1970.fixedDeltaTime = i1971[0]
  i1970.maximumDeltaTime = i1971[1]
  i1970.timeScale = i1971[2]
  i1970.maximumParticleTimestep = i1971[3]
  return i1970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1973 = data
  i1972.gravity = new pc.Vec3( i1973[0], i1973[1], i1973[2] )
  i1972.defaultSolverIterations = i1973[3]
  i1972.bounceThreshold = i1973[4]
  i1972.autoSyncTransforms = !!i1973[5]
  i1972.autoSimulation = !!i1973[6]
  var i1975 = i1973[7]
  var i1974 = []
  for(var i = 0; i < i1975.length; i += 1) {
    i1974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1975[i + 0]) );
  }
  i1972.collisionMatrix = i1974
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1979 = data
  i1978.enabled = !!i1979[0]
  i1978.layerId = i1979[1]
  i1978.otherLayerId = i1979[2]
  return i1978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'material')
  i1980.gravity = new pc.Vec2( i1981[2], i1981[3] )
  i1980.positionIterations = i1981[4]
  i1980.velocityIterations = i1981[5]
  i1980.velocityThreshold = i1981[6]
  i1980.maxLinearCorrection = i1981[7]
  i1980.maxAngularCorrection = i1981[8]
  i1980.maxTranslationSpeed = i1981[9]
  i1980.maxRotationSpeed = i1981[10]
  i1980.baumgarteScale = i1981[11]
  i1980.baumgarteTOIScale = i1981[12]
  i1980.timeToSleep = i1981[13]
  i1980.linearSleepTolerance = i1981[14]
  i1980.angularSleepTolerance = i1981[15]
  i1980.defaultContactOffset = i1981[16]
  i1980.autoSimulation = !!i1981[17]
  i1980.queriesHitTriggers = !!i1981[18]
  i1980.queriesStartInColliders = !!i1981[19]
  i1980.callbacksOnDisable = !!i1981[20]
  i1980.reuseCollisionCallbacks = !!i1981[21]
  i1980.autoSyncTransforms = !!i1981[22]
  var i1983 = i1981[23]
  var i1982 = []
  for(var i = 0; i < i1983.length; i += 1) {
    i1982.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1983[i + 0]) );
  }
  i1980.collisionMatrix = i1982
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1987 = data
  i1986.enabled = !!i1987[0]
  i1986.layerId = i1987[1]
  i1986.otherLayerId = i1987[2]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1989 = data
  var i1991 = i1989[0]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1991[i + 0]) );
  }
  i1988.qualityLevels = i1990
  var i1993 = i1989[1]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( i1993[i + 0] );
  }
  i1988.names = i1992
  i1988.shadows = i1989[2]
  i1988.anisotropicFiltering = i1989[3]
  i1988.antiAliasing = i1989[4]
  i1988.lodBias = i1989[5]
  i1988.shadowCascades = i1989[6]
  i1988.shadowDistance = i1989[7]
  i1988.shadowmaskMode = i1989[8]
  i1988.shadowProjection = i1989[9]
  i1988.shadowResolution = i1989[10]
  i1988.softParticles = !!i1989[11]
  i1988.softVegetation = !!i1989[12]
  i1988.activeColorSpace = i1989[13]
  i1988.desiredColorSpace = i1989[14]
  i1988.masterTextureLimit = i1989[15]
  i1988.maxQueuedFrames = i1989[16]
  i1988.particleRaycastBudget = i1989[17]
  i1988.pixelLightCount = i1989[18]
  i1988.realtimeReflectionProbes = !!i1989[19]
  i1988.shadowCascade2Split = i1989[20]
  i1988.shadowCascade4Split = new pc.Vec3( i1989[21], i1989[22], i1989[23] )
  i1988.streamingMipmapsActive = !!i1989[24]
  i1988.vSyncCount = i1989[25]
  i1988.asyncUploadBufferSize = i1989[26]
  i1988.asyncUploadTimeSlice = i1989[27]
  i1988.billboardsFaceCameraPosition = !!i1989[28]
  i1988.shadowNearPlaneOffset = i1989[29]
  i1988.streamingMipmapsMemoryBudget = i1989[30]
  i1988.maximumLODLevel = i1989[31]
  i1988.streamingMipmapsAddAllCameras = !!i1989[32]
  i1988.streamingMipmapsMaxLevelReduction = i1989[33]
  i1988.streamingMipmapsRenderersPerFrame = i1989[34]
  i1988.resolutionScalingFixedDPIFactor = i1989[35]
  i1988.streamingMipmapsMaxFileIORequests = i1989[36]
  i1988.currentQualityLevel = i1989[37]
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1999 = data
  i1998.weight = i1999[0]
  i1998.vertices = i1999[1]
  i1998.normals = i1999[2]
  i1998.tangents = i1999[3]
  return i1998
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useUInt32IndexFormat":2,"vertexCount":3,"aabb":4,"streams":5,"vertices":6,"subMeshes":7,"bindposes":8,"blendShapes":9},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15,"usePhysicalProperties":17,"focalLength":18,"sensorSize":19,"lensShift":21,"gateFit":23,"commandBufferCount":24,"cameraType":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"shadowResolution":14,"lightmapBakeType":15,"renderMode":16,"cookie":17,"cookieSize":19},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"referenceAmbientProbe":36,"useReferenceAmbientProbe":37,"customReflection":38,"defaultReflection":40,"defaultReflectionMode":42,"defaultReflectionResolution":43,"sunLightObjectId":44,"pixelLightCount":45,"defaultReflectionHDR":46,"hasLightDataAsset":47,"hasManualGenerate":48},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.UniversalRenderPipelineAsset":{"AdditionalLightsPerObjectLimit":0,"AdditionalLightsRenderingMode":1,"LightRenderingMode":2,"ColorGradingLutSize":3,"ColorGradingMode":4,"MainLightRenderingMode":5,"MainLightRenderingModeValue":6,"SupportsMainLightShadows":7,"MixedLightingSupported":8,"MsaaQuality":9,"MSAA":10,"OpaqueDownsampling":11,"MainLightShadowmapResolution":12,"MainLightShadowmapResolutionValue":13,"SupportsSoftShadows":14,"SoftShadowQuality":15,"SoftShadowQualityValue":16,"ShadowDistance":17,"ShadowCascadeCount":18,"Cascade2Split":19,"Cascade3Split":20,"Cascade4Split":22,"CascadeBorder":25,"ShadowDepthBias":26,"ShadowNormalBias":27,"RenderScale":28,"RequireDepthTexture":29,"RequireOpaqueTexture":30,"SupportsHDR":31,"SupportsTerrainHoles":32},"Luna.Unity.DTO.UnityEngine.Assets.LightRenderingMode":{"Disabled":0,"PerVertex":1,"PerPixel":2},"Luna.Unity.DTO.UnityEngine.Assets.ColorGradingMode":{"LowDynamicRange":0,"HighDynamicRange":1},"Luna.Unity.DTO.UnityEngine.Assets.MsaaQuality":{"Disabled":0,"_2x":1,"_4x":2,"_8x":3},"Luna.Unity.DTO.UnityEngine.Assets.Downsampling":{"None":0,"_2xBilinear":1,"_4xBox":2,"_4xBilinear":3},"Luna.Unity.DTO.UnityEngine.Assets.ShadowResolution":{"_256":0,"_512":1,"_1024":2,"_2048":3,"_4096":4},"Luna.Unity.DTO.UnityEngine.Assets.SoftShadowQuality":{"UsePipelineSettings":0,"Low":1,"Medium":2,"High":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10,"compiled":11},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableDynamicBatching":9,"lightmapEncodingQuality":10,"desiredColorSpace":11,"allTags":12},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"83":[84],"85":[84],"86":[84],"87":[84],"88":[84],"89":[84],"90":[91],"92":[9],"93":[27],"94":[27],"95":[27],"96":[27],"97":[27],"98":[27],"99":[27],"100":[101],"102":[101],"103":[101],"104":[101],"105":[101],"106":[101],"107":[101],"108":[101],"109":[101],"110":[101],"111":[101],"112":[101],"113":[101],"114":[9],"115":[4],"116":[117],"118":[117],"20":[19],"119":[101],"120":[23,121,19],"56":[19],"122":[9],"11":[9],"13":[12],"123":[124],"125":[19],"126":[19],"22":[20],"24":[23,19],"127":[19],"21":[20],"36":[19],"128":[19],"63":[19],"129":[19],"41":[19],"130":[19],"35":[19],"45":[19],"131":[19],"132":[23,19],"133":[19],"44":[19],"40":[19],"134":[19],"39":[23,19],"49":[19],"135":[17],"136":[17],"18":[17],"137":[17],"138":[9],"139":[9],"140":[124],"141":[124]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.MonoBehaviour","MatchObject","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Rendering.Universal.UniversalAdditionalCameraData","UnityEngine.Light","UnityEngine.Rendering.Universal.UniversalAdditionalLightData","UnityEngine.Rendering.Volume","UnityEngine.Rendering.VolumeProfile","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.BoxCollider","UnityEngine.Rigidbody","_GameManager","UnityEngine.GameObject","MouseController","MatchController","UnityEngine.MeshCollider","UnityEngine.Cubemap","UnityEngine.Rendering.UI.DebugUIHandlerCanvas","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.ContentSizeFitter","UnityEngine.Rendering.UI.DebugUIHandlerContainer","UnityEngine.Rendering.UI.DebugUIHandlerPanel","UnityEngine.UI.Text","UnityEngine.UI.ScrollRect","UnityEngine.UI.LayoutElement","UnityEngine.UI.Button","UnityEngine.Font","UnityEngine.UI.Scrollbar","UnityEngine.UI.Mask","UnityEngine.EventSystems.EventTrigger","UnityEngine.Rendering.UI.DebugUIHandlerValue","UnityEngine.Rendering.UI.DebugUIHandlerToggle","UnityEngine.UI.Toggle","UnityEngine.Rendering.UI.DebugUIHandlerIntField","UnityEngine.Rendering.UI.DebugUIHandlerUIntField","UnityEngine.Rendering.UI.DebugUIHandlerFloatField","UnityEngine.Rendering.UI.DebugUIHandlerEnumField","UnityEngine.Rendering.UI.DebugUIHandlerButton","UnityEngine.Rendering.UI.DebugUIHandlerFoldout","UnityEngine.Rendering.UI.UIFoldout","UnityEngine.Rendering.UI.DebugUIHandlerColor","UnityEngine.Rendering.UI.DebugUIHandlerIndirectFloatField","UnityEngine.Rendering.UI.DebugUIHandlerVector2","UnityEngine.Rendering.UI.DebugUIHandlerVector3","UnityEngine.Rendering.UI.DebugUIHandlerVector4","UnityEngine.Rendering.UI.DebugUIHandlerVBox","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.Rendering.UI.DebugUIHandlerHBox","UnityEngine.Rendering.UI.DebugUIHandlerGroup","UnityEngine.Rendering.UI.DebugUIHandlerBitField","UnityEngine.Rendering.UI.DebugUIHandlerIndirectToggle","UnityEngine.Rendering.UI.DebugUIHandlerToggleHistory","UnityEngine.Rendering.UI.DebugUIHandlerEnumHistory","UnityEngine.Rendering.UI.DebugUIHandlerRow","UnityEngine.Rendering.UI.DebugUIHandlerMessageBox","UnityEngine.Rendering.UI.DebugUIHandlerProgressBar","UnityEngine.Rendering.UI.DebugUIHandlerValueTuple","UnityEngine.Rendering.UI.DebugUIHandlerObject","UnityEngine.Rendering.UI.DebugUIHandlerObjectList","UnityEngine.Rendering.UI.DebugUIHandlerObjectPopupField","UnityEngine.Rendering.UI.DebugUIHandlerPersistentCanvas","UnityEngine.Rendering.Universal.Tonemapping","UnityEngine.Rendering.Universal.Bloom","UnityEngine.Rendering.Universal.Vignette","DG.Tweening.Core.DOTweenSettings","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","PlayerController","UnityEngine.UI.Extensions.CasualGame.UIParticleSystem","UnityEngine.ParticleSystem","UnityEngine.Experimental.Rendering.Universal.PixelPerfectCamera","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutGroup","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.Slider","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine"]

Deserializers.unityVersion = "2022.3.60f1";

Deserializers.productName = "Playable_Project";

Deserializers.lunaInitializationTime = "07/08/2025 13:34:21";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "6.3.0";

Deserializers.lunaSHA = "7c1090235e749b60367a931fd9d8e53ca14842b9";

Deserializers.creativeName = "eastgeon31-naver-com";

Deserializers.lunaAppID = "31170";

Deserializers.projectId = "1ea3bb43f778449c78ecaf64beaf075a";

Deserializers.packagesInfo = "com.unity.nuget.newtonsoft-json: 2.0.0\ncom.unity.render-pipelines.universal: 14.0.12\ncom.unity.textmeshpro: \ncom.unity.timeline: 1.7.6\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "True";

Deserializers.runtimeAnalysisExcludedClassesCount = "1757";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3146";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isReferenceAmbientProbeBaked = "False";

Deserializers.isLunaCompilerV2Used = "True";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Unity-Technologies.com.unity.template.urp-blank";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 28;

Deserializers.linearColorSpace = false;

Deserializers.buildID = "138d0ebe-c316-44c4-8d1e-3bf21abf6416";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Rendering","DebugUpdater","RuntimeInit"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"]],[],[["UnityEngine","Experimental","Rendering","XRSystem","XRSystemInit"]],[]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

