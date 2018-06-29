package us.ihmc.euclid;

import us.ihmc.euclid.tuple3D.interfaces.Tuple3DBasics;
import us.ihmc.euclid.tuple3D.interfaces.Vector3DReadOnly;

/**
 * {@code Axis} can be used to provide a simple and readable way to refer the three main axes of a
 * coordinate system.
 */
public enum Axis implements Vector3DReadOnly
{
   /** The x-axis is usually associated with the forward direction. */
   X(1.0, 0.0, 0.0),
   /**
    * The y-axis is usually associated with the direction pointing to the left of the forward direction
    * and is horizontal.
    */
   Y(0.0, 1.0, 0.0),
   /**
    * The z-axis is usually associated with the vertical direction, parallel to the gravity vector but
    * pointing the opposite direction.
    */
   Z(0.0, 0.0, 1.0);

   /**
    * Static final field holding the return from {@link #values()}. This field should be used in place
    * of calling values() for garbage-free operations.
    */
   public static final Axis[] values = values();

   private final double x, y, z;

   Axis(double x, double y, double z)
   {
      this.x = x;
      this.y = y;
      this.z = z;
   }

   /**
    * Returns the x-component of this axis.
    *
    * @return the x-component.
    */
   @Override
   public double getX()
   {
      return x;
   }

   /**
    * Returns the y-component of this axis.
    *
    * @return the y-component.
    */
   @Override
   public double getY()
   {
      return y;
   }

   /**
    * Returns the z-component of this axis.
    *
    * @return the z-component.
    */
   @Override
   public double getZ()
   {
      return z;
   }

   /**
    * Gets the value of the tuple for the given axis AND THIS IS A TEST.
    *
    * @param tuple the tuple to get value from. Not modified.
    * @param axis the {@link Axis} to get value for. Not modified.
    * @return the double value of {@code tuple} for {@code axis}.
    */
   public static double get(Tuple3DBasics tuple, Axis axis)
   {
      switch (axis)
      {
      case X:
         return tuple.getX();

      case Y:
         return tuple.getY();

      case Z:
         return tuple.getZ();

      default:
         throw new IndexOutOfBoundsException();
      }
   }

   /**
    * Sets the value of the given tuple for the given axis to the given value.
    *
    * @param tupleToModify the tuple to set value of. Modified.
    * @param axis the {@link Axis} to set value for. Not modified.
    * @param value the double value to set {@code axis} of {@code tupleToModify} to.
    */
   public static void set(Tuple3DBasics tupleToModify, Axis axis, double value)
   {
      switch (axis)
      {
      case X:
         tupleToModify.setX(value);
         break;

      case Y:
         tupleToModify.setY(value);
         break;

      case Z:
         tupleToModify.setZ(value);
         break;

      default:
         throw new IndexOutOfBoundsException();
      }
   }

   /**
    * Obtains the next axis, in a clockwise fashion.
    *
    * @return next clockwise axis
    */
   public Axis getNextClockwiseAxis()
   {
      switch (this)
      {
      case X:
         return Z;
      case Y:
         return X;
      default:
         return Y;
      }
   }

   /**
    * Obtains the next axis, in a counterclockwise fashion.
    *
    * @return next counterclockwise axis
    */
   public Axis getNextCounterClockwiseAxis()
   {
      switch (this)
      {
      case X:
         return Y;
      case Y:
         return Z;
      default:
         return X;
      }
   }
}
