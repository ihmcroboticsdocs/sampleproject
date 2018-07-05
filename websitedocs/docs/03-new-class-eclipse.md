---
title: Create The ValkyrieDemo Class
sidebar_label: Create the ValkyrieDemo Class
---

<br/> 
 ### Open the Java Perspective

You'll want to have the Java Perspective open before you create and edit your class.  After importing the Gradle Project you are often left with the Gradle Tasks window open and the Java Perspective minimized. Click the maximize perspective button on the right of the Eclipse IDE window to expand the Java Perspective.

![Wizard Search](/img/quickstart/eclipseAfterGradleImport.png)

Once expanded you should see the `GradleProject` selected on the left and `Java` on the top right.

![Wizard Search](/img/quickstart/eclipseJavaPerspective.png)

<br/> 
### Create a New Class to Run the Valkyrie Simulation

Press `Ctrl+N` (`Cmd+N` on OS X) to bring up the "New" wizard, type out "Class" to filter down to the "Class" option, and then click `Next`.

![Wizard Search](/img/quickstart/eclipseNewFileWizard.png)

Java classes are organized by "packages". Many IHMC packages start with `us.ihmc`, you can use your organization, a personal website, or whatever you'd like as your package. Here we're going to use `us.ihmc.demo` as the package, and `ValkyrieDemo` as the name of the class. Fill out this information and click `Finish`:

![New Class Wizard](/img/quickstart/eclipseNewClassWizard.png)

Fill in the class to look like the following:

```java
package us.ihmc.demo;

import us.ihmc.avatar.DRCFlatGroundWalkingTrack;
import us.ihmc.avatar.drcRobot.DRCRobotModel;
import us.ihmc.avatar.initialSetup.DRCGuiInitialSetup;
import us.ihmc.avatar.initialSetup.DRCRobotInitialSetup;
import us.ihmc.avatar.initialSetup.DRCSCSInitialSetup;
import us.ihmc.commonWalkingControlModules.desiredHeadingAndVelocity.HeadingAndVelocityEvaluationScriptParameters;
import us.ihmc.commonWalkingControlModules.highLevelHumanoidControl.factories.WalkingProvider;
import us.ihmc.jMonkeyEngineToolkit.GroundProfile3D;
import us.ihmc.simulationconstructionset.HumanoidFloatingRootJointRobot;
import us.ihmc.simulationconstructionset.SimulationConstructionSet;
import us.ihmc.simulationconstructionset.util.ground.FlatGroundProfile;
import us.ihmc.valkyrie.ValkyrieRobotModel;

public class ValkyrieDemo
{
   public static void main(String[] args)
   {
      DRCRobotModel robotModel = new ValkyrieRobotModel(DRCRobotModel.RobotTarget.SCS, false); // Construct the Valkyrie robot model for simulation.
      DRCGuiInitialSetup guiInitialSetup = new DRCGuiInitialSetup(true, false); // Helper configuration object for setting up the Simulation GUI
      final double groundHeight = 0.0; // No magic numbers!
      GroundProfile3D groundProfile = new FlatGroundProfile(groundHeight); // Construct a ground profile

      DRCSCSInitialSetup scsInitialSetup = new DRCSCSInitialSetup(groundProfile, robotModel.getSimulateDT()); // Helper configuration object for setting up Simulation Construction Set
      scsInitialSetup.setDrawGroundProfile(true); // Make ground profile visible
      scsInitialSetup.setInitializeEstimatorToActual(true); // Seed the state estimator with a perfect starting configuration

      double initialYaw = 0.0; // No magic numbers!
      DRCRobotInitialSetup<HumanoidFloatingRootJointRobot> robotInitialSetup = robotModel.getDefaultRobotInitialSetup(groundHeight,
                                                                                                                      initialYaw); // Helper configuration object for the robot starting configuration

      boolean useVelocityAndHeadingScript = true; // No magic... booleans?
      boolean cheatWithGroundHeightAtForFootstep = false; // No magic... booleans?

      HeadingAndVelocityEvaluationScriptParameters walkingScriptParameters = new HeadingAndVelocityEvaluationScriptParameters();
      DRCFlatGroundWalkingTrack flatGroundWalkingTrack = new DRCFlatGroundWalkingTrack(robotInitialSetup,
                                                                                       guiInitialSetup, scsInitialSetup, useVelocityAndHeadingScript, cheatWithGroundHeightAtForFootstep,
                                                                                       robotModel, WalkingProvider.VELOCITY_HEADING_COMPONENT, walkingScriptParameters); // Construct a Flat Ground Walking Track, a re-usable sim environment we use to validate the basics of the walking algorithm

      SimulationConstructionSet scs = flatGroundWalkingTrack.getSimulationConstructionSet(); // Construct the SCS instance
   }
}
```