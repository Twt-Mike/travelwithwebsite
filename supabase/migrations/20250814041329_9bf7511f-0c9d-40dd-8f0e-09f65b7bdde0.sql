-- CRITICAL SECURITY FIX: Remove public access to sensitive customer and business data
-- This migration removes overly permissive RLS policies that expose sensitive information

-- 1. Drop all "viewable by everyone" policies that expose sensitive data
DROP POLICY IF EXISTS "Tour bookings are viewable by everyone" ON tour_bookings;
DROP POLICY IF EXISTS "Operations bookings are viewable by everyone" ON activity_bookings;
DROP POLICY IF EXISTS "Operations bookings are viewable by everyone" ON accommodation_bookings;
DROP POLICY IF EXISTS "Operations bookings are viewable by everyone" ON transport_bookings;
DROP POLICY IF EXISTS "Room assignments are viewable by everyone" ON room_assignments;
DROP POLICY IF EXISTS "Tours are viewable by everyone" ON tours;
DROP POLICY IF EXISTS "Activities reference are viewable by everyone" ON activities_reference;
DROP POLICY IF EXISTS "Transport reference are viewable by everyone" ON transport_reference;
DROP POLICY IF EXISTS "Accommodations reference are viewable by everyone" ON accommodations_reference;

-- 2. Create secure, authentication-required policies for sensitive data
-- Tour bookings (contains customer personal data, medical info, financial data)
CREATE POLICY "Authenticated users can view tour bookings" 
ON tour_bookings 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage tour bookings" 
ON tour_bookings 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Activity bookings (contains operational and financial data)
CREATE POLICY "Authenticated users can view activity bookings" 
ON activity_bookings 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage activity bookings" 
ON activity_bookings 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Accommodation bookings (contains operational and financial data)
CREATE POLICY "Authenticated users can view accommodation bookings" 
ON accommodation_bookings 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage accommodation bookings" 
ON accommodation_bookings 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Transport bookings (contains operational and financial data)
CREATE POLICY "Authenticated users can view transport bookings" 
ON transport_bookings 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage transport bookings" 
ON transport_bookings 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Room assignments (contains guest personal information)
CREATE POLICY "Authenticated users can view room assignments" 
ON room_assignments 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage room assignments" 
ON room_assignments 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Tours (contains operational data)
CREATE POLICY "Authenticated users can view tours" 
ON tours 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage tours" 
ON tours 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

-- Reference tables (contain vendor contact info and pricing)
CREATE POLICY "Authenticated users can view activities reference" 
ON activities_reference 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage activities reference" 
ON activities_reference 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can view transport reference" 
ON transport_reference 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage transport reference" 
ON transport_reference 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);

CREATE POLICY "Authenticated users can view accommodations reference" 
ON accommodations_reference 
FOR SELECT 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can manage accommodations reference" 
ON accommodations_reference 
FOR ALL 
TO authenticated
USING (true)
WITH CHECK (true);