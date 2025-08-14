-- CRITICAL SECURITY FIX: Implement user-specific access control for customer data
-- Current issue: ANY authenticated user can see ALL customer personal data

-- 1. Create user roles system to distinguish between admin/staff and customers
CREATE TYPE public.app_role AS ENUM ('admin', 'staff', 'customer');

-- 2. Create user_roles table to manage permissions
CREATE TABLE public.user_roles (
    id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL DEFAULT 'customer',
    created_at timestamp with time zone DEFAULT now() NOT NULL,
    UNIQUE (user_id, role)
);

-- Enable RLS on user_roles
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 3. Create security definer function to check user roles (prevents RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 4. Create function to check if user is admin or staff
CREATE OR REPLACE FUNCTION public.is_admin_or_staff(_user_id uuid)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role IN ('admin', 'staff')
  )
$$;

-- 5. Add user_id column to tour_bookings to link bookings to users
ALTER TABLE public.tour_bookings ADD COLUMN user_id uuid REFERENCES auth.users(id);

-- 6. Drop existing overly permissive policies
DROP POLICY IF EXISTS "Authenticated users can view tour bookings" ON tour_bookings;
DROP POLICY IF EXISTS "Authenticated users can manage tour bookings" ON tour_bookings;

-- 7. Create secure, role-based policies for tour_bookings
-- Only admin/staff can view all bookings
CREATE POLICY "Admin and staff can view all tour bookings" 
ON tour_bookings 
FOR SELECT 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()));

-- Customers can only view their own bookings
CREATE POLICY "Customers can view their own tour bookings" 
ON tour_bookings 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

-- Only admin/staff can create/update/delete bookings
CREATE POLICY "Admin and staff can manage all tour bookings" 
ON tour_bookings 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

-- 8. Create policies for user_roles table
CREATE POLICY "Users can view their own roles" 
ON user_roles 
FOR SELECT 
TO authenticated
USING (auth.uid() = user_id);

CREATE POLICY "Admin can manage all user roles" 
ON user_roles 
FOR ALL 
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- 9. Apply same security model to other sensitive tables
-- Activity bookings
DROP POLICY IF EXISTS "Authenticated users can view activity bookings" ON activity_bookings;
DROP POLICY IF EXISTS "Authenticated users can manage activity bookings" ON activity_bookings;

CREATE POLICY "Admin and staff can manage activity bookings" 
ON activity_bookings 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

-- Accommodation bookings
DROP POLICY IF EXISTS "Authenticated users can view accommodation bookings" ON accommodation_bookings;
DROP POLICY IF EXISTS "Authenticated users can manage accommodation bookings" ON accommodation_bookings;

CREATE POLICY "Admin and staff can manage accommodation bookings" 
ON accommodation_bookings 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

-- Transport bookings
DROP POLICY IF EXISTS "Authenticated users can view transport bookings" ON transport_bookings;
DROP POLICY IF EXISTS "Authenticated users can manage transport bookings" ON transport_bookings;

CREATE POLICY "Admin and staff can manage transport bookings" 
ON transport_bookings 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

-- Room assignments
DROP POLICY IF EXISTS "Authenticated users can view room assignments" ON room_assignments;
DROP POLICY IF EXISTS "Authenticated users can manage room assignments" ON room_assignments;

CREATE POLICY "Admin and staff can manage room assignments" 
ON room_assignments 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

-- Tours
DROP POLICY IF EXISTS "Authenticated users can view tours" ON tours;
DROP POLICY IF EXISTS "Authenticated users can manage tours" ON tours;

CREATE POLICY "Admin and staff can manage tours" 
ON tours 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

-- Reference tables (keep admin/staff only access)
DROP POLICY IF EXISTS "Authenticated users can view activities reference" ON activities_reference;
DROP POLICY IF EXISTS "Authenticated users can manage activities reference" ON activities_reference;

CREATE POLICY "Admin and staff can manage activities reference" 
ON activities_reference 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can view transport reference" ON transport_reference;
DROP POLICY IF EXISTS "Authenticated users can manage transport reference" ON transport_reference;

CREATE POLICY "Admin and staff can manage transport reference" 
ON transport_reference 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));

DROP POLICY IF EXISTS "Authenticated users can view accommodations reference" ON accommodations_reference;
DROP POLICY IF EXISTS "Authenticated users can manage accommodations reference" ON accommodations_reference;

CREATE POLICY "Admin and staff can manage accommodations reference" 
ON accommodations_reference 
FOR ALL 
TO authenticated
USING (public.is_admin_or_staff(auth.uid()))
WITH CHECK (public.is_admin_or_staff(auth.uid()));