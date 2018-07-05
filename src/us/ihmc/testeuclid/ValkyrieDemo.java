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