Sure! Here’s a clear, professional, and well-structured **Markdown document** describing your task requirements:

---

# Task: Dual Container Button Transfer

## Overview

You need to build a UI consisting of **two containers (Left and Right)** that hold lists of elements. Users can transfer elements between these containers using arrow buttons placed between them.

## Functional Requirements

1. **Containers**

   - There will be **two containers**:

     - **Left Container**
     - **Right Container**

   - Each container will contain a list of elements (buttons).

2. **Arrow Buttons**

   - **Left Arrow (⬅️)**: Moves the topmost element from the **Right Container** to the **Left Container**.
   - **Right Arrow (➡️)**: Moves the topmost element from the **Left Container** to the **Right Container**.

3. **Button Click Behavior**

   - When a user clicks the **Right Arrow (➡️)**:

     - The **topmost element** from the Left Container is **removed**.
     - The element is **added as the last element** in the Right Container.

   - When a user clicks the **Left Arrow (⬅️)**:

     - The **topmost element** from the Right Container is **removed**.
     - The element is **added as the last element** in the Left Container.

4. **Arrow Enable/Disable Logic**

   - If the **Left Container** is empty:

     - The **Right Arrow (➡️)** is **disabled**.

   - If the **Right Container** is empty:

     - The **Left Arrow (⬅️)** is **disabled**.

## Example Flow

- Initial State:

  ```
  Left Container: [A, B, C]
  Right Container: [X, Y]
  ```

- User clicks ➡️

  ```
  Left Container: [B, C]
  Right Container: [X, Y, A]
  ```

- User clicks ⬅️

  ```
  Left Container: [B, C, X]
  Right Container: [Y, A]
  ```

## Demo Video

📹 **Watch the demo video:**
[View demo video](./demo.gif)

## Notes

✅ The element removed is always the **topmost element** of the respective container.

✅ The element is added as the **last element** in the destination container.

✅ Arrows reflect the valid state dynamically (enabled/disabled).

---
