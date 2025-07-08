using UnityEngine;

public class MouseController : MonoBehaviour
{
	[SerializeField]
	private GameObject selectedObject;

	[SerializeField]
	private GameObject prevParent;

	[SerializeField]
	private GameObject guideText;

	[SerializeField]
	private Vector3 objectPrevPos = new Vector3(0f, 0f, 0f);

	[SerializeField]
	private bool isDragging = false;

	[SerializeField]
	private MatchController matchController;

	private Vector3 mousePos;

	private Vector3 objectPos = new Vector3(0f, -1.3f, -1.3f);

	private float zPos = -2f;

	private Camera mainCam;

	private void Start()
	{
		mainCam = Camera.main;
		matchController = Object.FindObjectOfType<MatchController>();
	}

	private void Update()
	{
		HandleMouseDown();
		HandleMouseUp();
		HandleMouseDrag();
	}

	private void HandleMouseDown()
	{
		if (Input.GetMouseButtonDown(0))
		{
			guideText.SetActive(false);
			Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
			if (Physics.Raycast(ray, out var hit) && hit.collider.transform.childCount == 1)
			{
				objectPrevPos = hit.collider.transform.GetChild(0).position;
				prevParent = hit.collider.gameObject;
				selectedObject = hit.collider.transform.GetChild(0).gameObject;
				selectedObject.transform.SetParent(null);
				isDragging = true;
			}
		}
	}

	private void HandleMouseUp()
	{
		if (!Input.GetMouseButtonUp(0) || !isDragging)
		{
			return;
		}
		Ray ray = mainCam.ScreenPointToRay(Input.mousePosition);
		if (Physics.Raycast(ray, out var hit))
		{
			if (hit.collider.transform.childCount == 0)
			{
				selectedObject.transform.parent = hit.collider.transform;
				selectedObject.transform.position = hit.collider.transform.position + objectPos;
				prevParent = null;
				isDragging = false;
				matchController.MatchCheck(hit.collider.GetComponent<MatchObject>().id);
			}
			else if (hit.collider.transform.childCount == 1)
			{
				selectedObject.transform.parent = prevParent.transform;
				selectedObject.transform.position = objectPrevPos;
				isDragging = false;
			}
			selectedObject = null;
		}
		if (!Physics.Raycast(ray, out hit))
		{
			selectedObject.transform.parent = prevParent.transform;
			selectedObject.transform.position = objectPrevPos;
			isDragging = false;
			selectedObject = null;
		}
	}

	private void HandleMouseDrag()
	{
		if (Input.GetMouseButton(0) && isDragging)
		{
			Vector3 mouseScreenPos = new Vector3(Input.mousePosition.x, Input.mousePosition.y, mainCam.WorldToScreenPoint(selectedObject.transform.position).z);
			mousePos = mainCam.ScreenToWorldPoint(mouseScreenPos);
			mousePos.z = zPos;
			selectedObject.transform.position = mousePos;
		}
	}
}
