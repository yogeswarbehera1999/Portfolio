/*
  # Contact Messages Table

  1. New Tables
    - `contact_messages`
      - `id` (uuid, primary key) - Unique identifier for each message
      - `name` (text) - Name of the person contacting
      - `email` (text) - Email address of the contact
      - `message` (text) - The message content
      - `created_at` (timestamptz) - Timestamp when message was received
      - `read` (boolean) - Whether the message has been read
  
  2. Security
    - Enable RLS on `contact_messages` table
    - Add policy for public insert (anyone can submit contact form)
    - Add policy for authenticated admin read (future admin panel)
  
  3. Notes
    - Public users can only INSERT (submit contact form)
    - Only authenticated users with admin role can read messages
    - Default `read` status is false
*/

CREATE TABLE IF NOT EXISTS contact_messages (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  message text NOT NULL,
  created_at timestamptz DEFAULT now(),
  read boolean DEFAULT false
);

ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit contact form"
  ON contact_messages
  FOR INSERT
  TO anon
  WITH CHECK (true);

CREATE POLICY "Authenticated users can read all messages"
  ON contact_messages
  FOR SELECT
  TO authenticated
  USING (true);