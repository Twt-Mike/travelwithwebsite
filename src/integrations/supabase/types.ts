export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instanciate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "12.2.3 (519615d)"
  }
  public: {
    Tables: {
      accommodation_bookings: {
        Row: {
          accommodation: string | null
          booking_ref: string | null
          booking_status: string
          checkout_date: string | null
          contact: string | null
          contact_name: string | null
          created_at: string
          date: string | null
          day_number: string | null
          id: string
          pax: number | null
          pax_calculation_type: string | null
          payment_due: string | null
          payment_type: string | null
          price_pp: number | null
          send_to_mastersheet: boolean | null
          total_price: number | null
          tour_date: string
          updated_at: string
        }
        Insert: {
          accommodation?: string | null
          booking_ref?: string | null
          booking_status?: string
          checkout_date?: string | null
          contact?: string | null
          contact_name?: string | null
          created_at?: string
          date?: string | null
          day_number?: string | null
          id?: string
          pax?: number | null
          pax_calculation_type?: string | null
          payment_due?: string | null
          payment_type?: string | null
          price_pp?: number | null
          send_to_mastersheet?: boolean | null
          total_price?: number | null
          tour_date: string
          updated_at?: string
        }
        Update: {
          accommodation?: string | null
          booking_ref?: string | null
          booking_status?: string
          checkout_date?: string | null
          contact?: string | null
          contact_name?: string | null
          created_at?: string
          date?: string | null
          day_number?: string | null
          id?: string
          pax?: number | null
          pax_calculation_type?: string | null
          payment_due?: string | null
          payment_type?: string | null
          price_pp?: number | null
          send_to_mastersheet?: boolean | null
          total_price?: number | null
          tour_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      accommodations_reference: {
        Row: {
          contact: string | null
          contact_address: string | null
          contact_name: string | null
          created_at: string
          id: string
          name: string
          updated_at: string
        }
        Insert: {
          contact?: string | null
          contact_address?: string | null
          contact_name?: string | null
          created_at?: string
          id?: string
          name: string
          updated_at?: string
        }
        Update: {
          contact?: string | null
          contact_address?: string | null
          contact_name?: string | null
          created_at?: string
          id?: string
          name?: string
          updated_at?: string
        }
        Relationships: []
      }
      activities_reference: {
        Row: {
          contact: string | null
          contact_address: string | null
          contact_name: string | null
          created_at: string
          guide_included: boolean
          host_included: boolean
          id: string
          name: string
          price_per_person: number
          pricing_type: string | null
          total_price: number | null
          updated_at: string
        }
        Insert: {
          contact?: string | null
          contact_address?: string | null
          contact_name?: string | null
          created_at?: string
          guide_included?: boolean
          host_included?: boolean
          id?: string
          name: string
          price_per_person?: number
          pricing_type?: string | null
          total_price?: number | null
          updated_at?: string
        }
        Update: {
          contact?: string | null
          contact_address?: string | null
          contact_name?: string | null
          created_at?: string
          guide_included?: boolean
          host_included?: boolean
          id?: string
          name?: string
          price_per_person?: number
          pricing_type?: string | null
          total_price?: number | null
          updated_at?: string
        }
        Relationships: []
      }
      activity_bookings: {
        Row: {
          activities: string | null
          booking_ref: string | null
          booking_status: string
          contact: string | null
          contact_name: string | null
          created_at: string
          date: string | null
          day_number: string | null
          id: string
          pax: number | null
          pax_calculation_type: string | null
          payment_due: string | null
          payment_type: string | null
          price_pp: number | null
          send_to_mastersheet: boolean | null
          status_updated_at: string | null
          time: string | null
          total_price: number | null
          tour_date: string
          updated_at: string
        }
        Insert: {
          activities?: string | null
          booking_ref?: string | null
          booking_status?: string
          contact?: string | null
          contact_name?: string | null
          created_at?: string
          date?: string | null
          day_number?: string | null
          id?: string
          pax?: number | null
          pax_calculation_type?: string | null
          payment_due?: string | null
          payment_type?: string | null
          price_pp?: number | null
          send_to_mastersheet?: boolean | null
          status_updated_at?: string | null
          time?: string | null
          total_price?: number | null
          tour_date: string
          updated_at?: string
        }
        Update: {
          activities?: string | null
          booking_ref?: string | null
          booking_status?: string
          contact?: string | null
          contact_name?: string | null
          created_at?: string
          date?: string | null
          day_number?: string | null
          id?: string
          pax?: number | null
          pax_calculation_type?: string | null
          payment_due?: string | null
          payment_type?: string | null
          price_pp?: number | null
          send_to_mastersheet?: boolean | null
          status_updated_at?: string | null
          time?: string | null
          total_price?: number | null
          tour_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      room_assignments: {
        Row: {
          booking_ids: string[]
          created_at: string
          guest_names: string[]
          id: string
          max_occupancy: number
          notes: string | null
          room_number: number
          room_type: string
          tour_date: string
          updated_at: string
        }
        Insert: {
          booking_ids?: string[]
          created_at?: string
          guest_names?: string[]
          id?: string
          max_occupancy?: number
          notes?: string | null
          room_number: number
          room_type?: string
          tour_date: string
          updated_at?: string
        }
        Update: {
          booking_ids?: string[]
          created_at?: string
          guest_names?: string[]
          id?: string
          max_occupancy?: number
          notes?: string | null
          room_number?: number
          room_type?: string
          tour_date?: string
          updated_at?: string
        }
        Relationships: []
      }
      tour_bookings: {
        Row: {
          amount_due: number | null
          country: string | null
          coupon_code: string | null
          created_at: string
          customer_notes: string | null
          date_of_birth: string | null
          deposit_amount: number | null
          dietary_requirements: string | null
          discount_amount: number | null
          email: string | null
          gender: string | null
          guest_number: number | null
          id: string
          is_main_booker: boolean | null
          item_name: string | null
          last_manual_edit: string | null
          manual_override_fields: string[] | null
          medical_info: string | null
          name: string | null
          order_date: string | null
          order_status: string | null
          order_total_amount: number | null
          payment_due: string | null
          payment_method: string | null
          phone: string | null
          quantity: number | null
          surname: string | null
          synced_at: string | null
          tour_date: string | null
          updated_at: string
          woocommerce_order_id: string
        }
        Insert: {
          amount_due?: number | null
          country?: string | null
          coupon_code?: string | null
          created_at?: string
          customer_notes?: string | null
          date_of_birth?: string | null
          deposit_amount?: number | null
          dietary_requirements?: string | null
          discount_amount?: number | null
          email?: string | null
          gender?: string | null
          guest_number?: number | null
          id?: string
          is_main_booker?: boolean | null
          item_name?: string | null
          last_manual_edit?: string | null
          manual_override_fields?: string[] | null
          medical_info?: string | null
          name?: string | null
          order_date?: string | null
          order_status?: string | null
          order_total_amount?: number | null
          payment_due?: string | null
          payment_method?: string | null
          phone?: string | null
          quantity?: number | null
          surname?: string | null
          synced_at?: string | null
          tour_date?: string | null
          updated_at?: string
          woocommerce_order_id: string
        }
        Update: {
          amount_due?: number | null
          country?: string | null
          coupon_code?: string | null
          created_at?: string
          customer_notes?: string | null
          date_of_birth?: string | null
          deposit_amount?: number | null
          dietary_requirements?: string | null
          discount_amount?: number | null
          email?: string | null
          gender?: string | null
          guest_number?: number | null
          id?: string
          is_main_booker?: boolean | null
          item_name?: string | null
          last_manual_edit?: string | null
          manual_override_fields?: string[] | null
          medical_info?: string | null
          name?: string | null
          order_date?: string | null
          order_status?: string | null
          order_total_amount?: number | null
          payment_due?: string | null
          payment_method?: string | null
          phone?: string | null
          quantity?: number | null
          surname?: string | null
          synced_at?: string | null
          tour_date?: string | null
          updated_at?: string
          woocommerce_order_id?: string
        }
        Relationships: []
      }
      tours: {
        Row: {
          created_at: string
          guide_count: number | null
          guide_gender: string | null
          guide_included_in_activities: boolean | null
          guide_name: string | null
          host_count: number | null
          host_gender: string | null
          host_included_in_activities: boolean | null
          host_is_guide: boolean
          host_name: string | null
          id: string
          paying_guests: number | null
          total_pax: number | null
          tour_date: string
          tour_day_length: number | null
          tour_name: string | null
          tour_type: Database["public"]["Enums"]["tour_type_enum"]
          updated_at: string
        }
        Insert: {
          created_at?: string
          guide_count?: number | null
          guide_gender?: string | null
          guide_included_in_activities?: boolean | null
          guide_name?: string | null
          host_count?: number | null
          host_gender?: string | null
          host_included_in_activities?: boolean | null
          host_is_guide?: boolean
          host_name?: string | null
          id?: string
          paying_guests?: number | null
          total_pax?: number | null
          tour_date: string
          tour_day_length?: number | null
          tour_name?: string | null
          tour_type?: Database["public"]["Enums"]["tour_type_enum"]
          updated_at?: string
        }
        Update: {
          created_at?: string
          guide_count?: number | null
          guide_gender?: string | null
          guide_included_in_activities?: boolean | null
          guide_name?: string | null
          host_count?: number | null
          host_gender?: string | null
          host_included_in_activities?: boolean | null
          host_is_guide?: boolean
          host_name?: string | null
          id?: string
          paying_guests?: number | null
          total_pax?: number | null
          tour_date?: string
          tour_day_length?: number | null
          tour_name?: string | null
          tour_type?: Database["public"]["Enums"]["tour_type_enum"]
          updated_at?: string
        }
        Relationships: []
      }
      transport_bookings: {
        Row: {
          booking_ref: string | null
          booking_status: string
          contact: string | null
          created_at: string
          date: string | null
          day_number: string | null
          depart_arrive: string | null
          id: string
          pax: number | null
          pax_calculation_type: string | null
          payment_due: string | null
          payment_type: string | null
          price_pp: number | null
          send_to_mastersheet: boolean | null
          time: string | null
          total_price: number | null
          tour_date: string
          transport: string | null
          updated_at: string
        }
        Insert: {
          booking_ref?: string | null
          booking_status?: string
          contact?: string | null
          created_at?: string
          date?: string | null
          day_number?: string | null
          depart_arrive?: string | null
          id?: string
          pax?: number | null
          pax_calculation_type?: string | null
          payment_due?: string | null
          payment_type?: string | null
          price_pp?: number | null
          send_to_mastersheet?: boolean | null
          time?: string | null
          total_price?: number | null
          tour_date: string
          transport?: string | null
          updated_at?: string
        }
        Update: {
          booking_ref?: string | null
          booking_status?: string
          contact?: string | null
          created_at?: string
          date?: string | null
          day_number?: string | null
          depart_arrive?: string | null
          id?: string
          pax?: number | null
          pax_calculation_type?: string | null
          payment_due?: string | null
          payment_type?: string | null
          price_pp?: number | null
          send_to_mastersheet?: boolean | null
          time?: string | null
          total_price?: number | null
          tour_date?: string
          transport?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      transport_reference: {
        Row: {
          contact_address: string | null
          contact_name: string | null
          created_at: string
          depart_arrive: string | null
          id: string
          name: string
          price_per_person: number
          pricing_type: string | null
          total_price: number | null
          updated_at: string
        }
        Insert: {
          contact_address?: string | null
          contact_name?: string | null
          created_at?: string
          depart_arrive?: string | null
          id?: string
          name: string
          price_per_person?: number
          pricing_type?: string | null
          total_price?: number | null
          updated_at?: string
        }
        Update: {
          contact_address?: string | null
          contact_name?: string | null
          created_at?: string
          depart_arrive?: string | null
          id?: string
          name?: string
          price_per_person?: number
          pricing_type?: string | null
          total_price?: number | null
          updated_at?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      tour_type_enum: "WooCommerce" | "WhiteLabel"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      tour_type_enum: ["WooCommerce", "WhiteLabel"],
    },
  },
} as const
